var json_viewer = (function() {
    var json_viewer = {},
        tag_indent_width = 27,
        tag_id = 0,
        root_id = "0",
        output = '',
        search_key_elem = document.getElementById('search_key'),

        closed_inner_object_template = Hogan.compile(document.getElementById('closed_inner_put_object').innerText),
        opened_inner_object_template = Hogan.compile(document.getElementById('opened_inner_put_object').innerText),
        opened_before_put_object_template = Hogan.compile(document.getElementById('before_put_object').innerText),
        after_put_object_template = Hogan.compile(document.getElementById('after_put_object').innerText),
        closed_inner_array_template = Hogan.compile(document.getElementById('closed_inner_put_array').innerText),
        opened_inner_array_template = Hogan.compile(document.getElementById('opened_inner_put_array').innerText),
        before_put_array_template = Hogan.compile(document.getElementById('before_put_array').innerText),
        after_put_array_template = Hogan.compile(document.getElementById('after_put_array').innerText),
        put_string_template = Hogan.compile(document.getElementById('_put_string').innerText),
        put_number_template = Hogan.compile(document.getElementById('_put_number').innerText),

        put_object = function(data, parent_id, left, key, indent) {
                tag_id += 1; 
                var is_not_root = tag_id != 1;
                output += opened_before_put_object_template.render({left: left, parent_id: parent_id, key: key, id: tag_id, is_not_root: is_not_root}, {'inner': opened_inner_object_template})
                indent += 1
                var next_parent_id = tag_id
                Object.keys(data).map(function(key) {
                    put(data[key], indent, key, next_parent_id) 
                });
                tag_id += 1; 
                output += after_put_object_template.render({left: left, parent_id: next_parent_id, key: key, id: tag_id})
        },

        put_array = function(data, parent_id, left, key, indent) {
                tag_id += 1; 
                var is_not_root = tag_id != 1;
                output += before_put_array_template.render({left: left, parent_id: parent_id, key: key, id: tag_id, is_not_root: is_not_root}, {'inner': opened_inner_array_template})
                indent += 1
                var next_parent_id = tag_id
                data.map(function(value, index) {
                    put(value, indent, index, next_parent_id) 
                });
                tag_id += 1; 
                output += after_put_array_template.render({left: left, parent_id: next_parent_id, key: key, id: tag_id})
        },

        put_string = function(data, parent_id, left, key) {
                tag_id += 1; 
                output += put_string_template.render({left: left, parent_id: parent_id, key: key, id: tag_id, data: data})
        },

        put_number = function(data, parent_id, left, key) {
                tag_id += 1; 
                output += put_number_template.render({left: left, parent_id: parent_id, key: key, id: tag_id, data: data})
        },

        put = function(data, indent, key, parent_id) {
            key = key === undefined ? null: key;
            parent_id = parent_id === undefined ? root_id: parent_id;
            var left = tag_indent_width * indent;
            if (data === null) {
                put_number("null", parent_id, left, key);
            }
            else if (Array.isArray(data)) {
                put_array(data, parent_id, left, key, indent);
            }
            else if (data.toString() === '[object Object]') {
                put_object(data, parent_id, left, key, indent);
            }
            else if (data.constructor === String) {
                put_string(data, parent_id, left, key);
            }
            else {
                put_number(data, parent_id, left, key);
            }
        },

        close = function() {
            var target_parent_id = this.id;
            var child_list = document.querySelectorAll('[parent_id="' + target_parent_id + '"]');
            var children = Array.prototype.slice.call(child_list);
            var is_not_root = this.id != 1;
            if (this.getAttribute("data_type") == "Object" && "state" in this.dataset) {
                this.innerHTML = closed_inner_object_template.render({key: this.dataset.key, is_not_root: is_not_root}); 
            }
            if (this.getAttribute("data_type") == "Array" && "state" in this.dataset) {
                this.innerHTML = closed_inner_array_template.render({key: this.dataset.key, is_not_root: is_not_root}); 
            }
            this.dataset.state = '0';
            children.map(function(c){
                c.style.display = 'none';
                c.dataset.state = '0';
                close.call(c);
            });
        },


        open = function() {
            var target_parent_id = this.id;
            var child_list = document.querySelectorAll('[parent_id="' + target_parent_id + '"]');
            var children = Array.prototype.slice.call(child_list);
            var is_not_root = this.id != 1;
            if (this.getAttribute("data_type") == "Object" && "state" in this.dataset) {
                this.innerHTML = opened_inner_object_template.render({key: this.dataset.key, is_not_root: is_not_root}); 
            }
            if (this.getAttribute("data_type") == "Array" && "state" in this.dataset) {
                this.innerHTML = opened_inner_array_template.render({key: this.dataset.key, is_not_root: is_not_root}); 
            }
            this.dataset.state = '1';
            children.map(function(c){
                c.style.display = 'block';
            });
        },

        change = function() {
            if (this.dataset.state === '1') {
                close.call(this);
            }
            else {
                open.call(this);
            }
        },

        open_parent = function(elem) {
            var parent_id = elem.getAttribute("parent_id");
            var parent_elem = document.getElementById(parent_id);
            open.call(parent_elem);
            if (parent_elem.getAttribute("parent_id") == root_id) {
                return
            }
            open_parent(parent_elem);
        },

        close_all = function() {
            var root =  document.querySelector('[parent_id="' + root_id + '"]');
            close.call(root);
        },

        display = function(input_id, output_id) {
            var output_elem = document.getElementById(output_id),
                data = '';
            output = '';
            tag_id = 0;
            try {
                data = JSON.parse(document.getElementById(input_id).value)
            } catch (e) {
                alert('不正なJSON \n ,}や,]はperseできません。\n http://www.json.org/');
                throw e;
            }
            put(data, 0);
            output_elem.innerHTML = output;
            var child_list = document.querySelectorAll('[data_type="Object"],[data_type="Array"]');
            var children = Array.prototype.slice.call(child_list);
            children.map(function(c){
                c.addEventListener('click', change, false);
            });
        },
        
        black_all = function() {
            var child_list = document.querySelectorAll('.red');
            var children = Array.prototype.slice.call(child_list);
            children.map(function(elem) {
                elem.classList.remove('red');
            });
        },

        search = function(input_id, type_name) {
            var key =  document.getElementById(input_id).value;
            var input_list = document.querySelectorAll('[name="' + type_name + '"]');
            var condition = Array.prototype.slice.call(input_list).filter(function(elem){ return elem.checked;})[0].value;
            var child_list = document.querySelectorAll('[key' + condition + '="' + key + '"]');
            var children = Array.prototype.slice.call(child_list);
            var key_elem;
            close_all();
            black_all();
            children.map(function(elem) {
                open_parent(elem);
                elem.classList.add('red');
            });
        };

    json_viewer.set_display  = function(button_id, input_id, output_id) {
        document.getElementById(button_id).addEventListener('click', display.bind(null, input_id, output_id), false);
    }

    json_viewer.set_search  = function(button_id, input_id, type_name) {
        document.getElementById(button_id).addEventListener('click', search.bind(null, input_id, type_name), false);
    }
    
    return json_viewer;
}());


