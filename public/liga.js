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
            'ic_close_style_fill': '&#xe900;',
            'ic_remove_file': '&#xe901;',
            'ic_arrow_direction_down': '&#xe902;',
            'ic_pin': '&#xe903;',
            'ic_request_again': '&#xe904;',
            'ic_facebook': '&#xe905;',
            'ic_chevron_direction_fold_vertical': '&#xe906;',
            'ic_exterminal_link': '&#xe907;',
            'ic_arrow_triangle_direction_right': '&#xe908;',
            'ic_goto': '&#xe909;',
            'ic_info_fill': '&#xe90a;',
            'ic_sort_direction_descending': '&#xe90b;',
            'ic_phone_style_border': '&#xe90c;',
            'ic_sort_direction_ascending': '&#xe90d;',
            'ic_arrow_triangle_direction_down': '&#xe90e;',
            'ic_add': '&#xe90f;',
            'ic_print': '&#xe910;',
            'ic_remove_style_border': '&#xe911;',
            'ic_person_style_border': '&#xe912;',
            'ic_Default': '&#xe913;',
            'ic_checkbox_state_checked': '&#xe914;',
            'ic_checkbox_state_half': '&#xe915;',
            'ic_setting': '&#xe916;',
            'ic_done_all': '&#xe917;',
            'ic_push_state_default': '&#xe918;',
            'ic_delete_bin_style_filled': '&#xe919;',
            'ic_notification': '&#xe91a;',
            'ic_chevron_direction_down': '&#xe91b;',
            'ic_calendar': '&#xe91c;',
            'ic_arrow_direction_diagonal_left': '&#xe91d;',
            'ic_upload_file_state_Default': '&#xe91e;',
            'ic_file': '&#xe91f;',
            'ic_write': '&#xe920;',
            'ic_checkbox_state_normal': '&#xe921;',
            'ic_gauge': '&#xe922;',
            'ic_star_style_fill': '&#xe923;',
            'ic_tune': '&#xe924;',
            'ic_chevron_direction_left': '&#xe925;',
            'ic_business_management': '&#xe926;',
            'ic_push_state_active': '&#xe927;',
            'ic_radio_state_checked': '&#xe928;',
            'ic_person_style_filled': '&#xe929;',
            'ic_chevron_direction_up': '&#xe92a;',
            'ic_menu': '&#xe92b;',
            'ic_helpdesk': '&#xe92c;',
            'ic_delete_bin_style_border': '&#xe92d;',
            'ic_find_on_map': '&#xe92e;',
            'ic_phone_style_fill': '&#xe92f;',
            'ic_arrow_triangle_direction_up': '&#xe930;',
            'ic_arrow_direction_right': '&#xe931;',
            'ic_line_chart': '&#xe932;',
            'ic_checkbox_state_just_check_icon': '&#xe933;',
            'ic_arrow_direction_left': '&#xe934;',
            'ic_download': '&#xe935;',
            'ic_chevron_direction_right': '&#xe936;',
            'ic_remove_style_filled': '&#xe937;',
            'ic_search': '&#xe938;',
            'ic_naver': '&#xe939;',
            'ic_close_style_border': '&#xe93a;',
            'ic_chevron_direction_expand_vertical': '&#xe93b;',
            'ic_arrow_triangle_direction_left': '&#xe93c;',
            'ic_star_style_border': '&#xe93d;',
            'ic_tooltip': '&#xe93e;',
            'ic_arrow_direction_up': '&#xe93f;',
            'ic_radio_state_normal': '&#xe940;',
            'ic_info_border': '&#xe941;',
            'ic_instagram': '&#xe942;',
            'ic_interaction': '&#xe943;',
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
                if (/icon-/.test(classes)) {
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
