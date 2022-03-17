/* A polyfill for browsers that don't support ligatures. */
/* The script tag referring to this file must be placed before the ending body tag. */

/* To provide support for elements dynamically added, this script adds
   method 'icomoonLiga' to the window object. You can pass element references to this method.
*/
(function () {
    'use strict';
    function supportsProperty(p) {
        var prefixes = ['Webkit', 'Moz', 'O', 'ms'],
            i,
            div = document.createElement('div'),
            ret = p in div.style;
        if (!ret) {
            p = p.charAt(0).toUpperCase() + p.substr(1);
            for (i = 0; i < prefixes.length; i += 1) {
                ret = prefixes[i] + p in div.style;
                if (ret) {
                    break;
                }
            }
        }
        return ret;
    }
    var icons;
    if (!supportsProperty('fontFeatureSettings')) {
        icons = {
            'close_style_fill': '&#xe900;',
            'remove_file': '&#xe901;',
            'arrow_direction_down': '&#xe902;',
            'pin': '&#xe903;',
            'request_again': '&#xe904;',
            'facebook': '&#xe905;',
            'chevron_direction_fold_vertical': '&#xe906;',
            'exterminal_link': '&#xe907;',
            'arrow_triangle_direction_right': '&#xe908;',
            'goto': '&#xe909;',
            'info_fill': '&#xe90a;',
            'sort_direction_descending': '&#xe90b;',
            'phone_style_border': '&#xe90c;',
            'sort_direction_ascending': '&#xe90d;',
            'arrow_triangle_direction_down': '&#xe90e;',
            'add': '&#xe90f;',
            'print': '&#xe910;',
            'remove_style_border': '&#xe911;',
            'person_style_border': '&#xe912;',
            'Default': '&#xe913;',
            'checkbox_state_checked': '&#xe914;',
            'checkbox_state_half': '&#xe915;',
            'setting': '&#xe916;',
            'done_all': '&#xe917;',
            'push_state_default': '&#xe918;',
            'delete_bin_style_filled': '&#xe919;',
            'notification': '&#xe91a;',
            'chevron_direction_down': '&#xe91b;',
            'calendar': '&#xe91c;',
            'arrow_direction_diagonal_left': '&#xe91d;',
            'upload_file_state_Default': '&#xe91e;',
            'file': '&#xe91f;',
            'write': '&#xe920;',
            'checkbox_state_normal': '&#xe921;',
            'gauge': '&#xe922;',
            'star_style_fill': '&#xe923;',
            'tune': '&#xe924;',
            'chevron_direction_left': '&#xe925;',
            'business_management': '&#xe926;',
            'push_state_active': '&#xe927;',
            'radio_state_checked': '&#xe928;',
            'person_style_filled': '&#xe929;',
            'chevron_direction_up': '&#xe92a;',
            'menu': '&#xe92b;',
            'helpdesk': '&#xe92c;',
            'delete_bin_style_border': '&#xe92d;',
            'find_on_map': '&#xe92e;',
            'phone_style_fill': '&#xe92f;',
            'arrow_triangle_direction_up': '&#xe930;',
            'arrow_direction_right': '&#xe931;',
            'line_chart': '&#xe932;',
            'checkbox_state_just_check_icon': '&#xe933;',
            'arrow_direction_left': '&#xe934;',
            'download': '&#xe935;',
            'chevron_direction_right': '&#xe936;',
            'remove_style_filled': '&#xe937;',
            'search': '&#xe938;',
            'naver': '&#xe939;',
            'close_style_border': '&#xe93a;',
            'chevron_direction_expand_vertical': '&#xe93b;',
            'arrow_triangle_direction_left': '&#xe93c;',
            'star_style_border': '&#xe93d;',
            'tooltip': '&#xe93e;',
            'arrow_direction_up': '&#xe93f;',
            'radio_state_normal': '&#xe940;',
            'info_border': '&#xe941;',
            'instagram': '&#xe942;',
            'interaction': '&#xe943;',
          '0': 0
        };
        delete icons['0'];
        window.icomoonLiga = function (els) {
            var classes,
                el,
                i,
                innerHTML,
                key;
            els = els || document.getElementsByTagName('*');
            if (!els.length) {
                els = [els];
            }
            for (i = 0; ; i += 1) {
                el = els[i];
                if (!el) {
                    break;
                }
                classes = el.className;
                if (/xicon-/.test(classes)) {
                    innerHTML = el.innerHTML;
                    if (innerHTML && innerHTML.length > 1) {
                        for (key in icons) {
                            if (icons.hasOwnProperty(key)) {
                                innerHTML = innerHTML.replace(new RegExp(key, 'g'), icons[key]);
                            }
                        }
                        el.innerHTML = innerHTML;
                    }
                }
            }
        };
        window.icomoonLiga();
    }
}());
