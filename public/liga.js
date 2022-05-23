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
            'panel_built': '&#xe903;',
            'hand_filled': '&#xe904;',
            'pin': '&#xe905;',
            'quote_type_left': '&#xe906;',
            'request_again': '&#xe907;',
            'money': '&#xe908;',
            'facebook': '&#xe909;',
            'chevron_direction_fold_vertical': '&#xe90a;',
            'exterminal_link': '&#xe90b;',
            'arrow_triangle_direction_right': '&#xe90c;',
            'certification_id_certifying': '&#xe90d;',
            'goto': '&#xe90e;',
            'info_fill': '&#xe90f;',
            'sort_direction_descending': '&#xe910;',
            'phone_style_border': '&#xe911;',
            'sort_direction_ascending': '&#xe912;',
            'quote_type_right': '&#xe913;',
            'arrow_triangle_direction_down': '&#xe914;',
            'passive': '&#xe915;',
            'again': '&#xe916;',
            'add': '&#xe917;',
            'opinion': '&#xe918;',
            'panel_roof': '&#xe919;',
            'office': '&#xe91a;',
            'print': '&#xe91b;',
            'remove_style_border': '&#xe91c;',
            'person_style_border': '&#xe91d;',
            'Default': '&#xe91e;',
            'checkbox_state_checked': '&#xe91f;',
            'checkbox_state_half': '&#xe920;',
            'user': '&#xe921;',
            'remove_style_basic': '&#xe922;',
            'setting': '&#xe923;',
            'calendar_time': '&#xe924;',
            'panel_auction': '&#xe925;',
            'done_all': '&#xe926;',
            'trade': '&#xe927;',
            'select_map': '&#xe928;',
            'push_state_default': '&#xe929;',
            'delete_bin_style_filled': '&#xe92a;',
            'notification': '&#xe92b;',
            'chevron_direction_down': '&#xe92c;',
            'calendar': '&#xe92d;',
            'active': '&#xe92e;',
            'capital': '&#xe92f;',
            'estimate_style_fill': '&#xe930;',
            'arrow_direction_diagonal_left': '&#xe931;',
            'upload_file_state_Default': '&#xe932;',
            'arrow_direction_down_outlined': '&#xe933;',
            'file': '&#xe934;',
            'youtube': '&#xe935;',
            'write': '&#xe936;',
            'close_style_outlined': '&#xe937;',
            'envelope_sealed': '&#xe938;',
            'checkbox_state_normal': '&#xe939;',
            'flag_stroke': '&#xe93a;',
            'gauge': '&#xe93b;',
            'panel_field': '&#xe93c;',
            'star_style_fill': '&#xe93d;',
            'certification_id_fail': '&#xe93e;',
            'tune': '&#xe93f;',
            'make_new_project': '&#xe940;',
            'chevron_direction_left': '&#xe941;',
            'add_outlined': '&#xe942;',
            'business_management': '&#xe943;',
            'push_state_active': '&#xe944;',
            'envelope_opened': '&#xe945;',
            'radio_state_checked': '&#xe946;',
            'environment': '&#xe947;',
            'estimate': '&#xe948;',
            'envelope_invite': '&#xe949;',
            'person_style_filled': '&#xe94a;',
            'chevron_direction_up': '&#xe94b;',
            'estimate_style_border': '&#xe94c;',
            'menu': '&#xe94d;',
            'helpdesk': '&#xe94e;',
            'flag_filled': '&#xe94f;',
            'delete_bin_style_border': '&#xe950;',
            'find_on_map': '&#xe951;',
            'phone_style_fill': '&#xe952;',
            'location_company_style_fill': '&#xe953;',
            'arrow_triangle_direction_up': '&#xe954;',
            'question': '&#xe955;',
            'arrow_direction_right': '&#xe956;',
            'hand_stroke': '&#xe957;',
            'line_chart': '&#xe958;',
            'checkbox_state_just_check_icon': '&#xe959;',
            'arrow_direction_left': '&#xe95a;',
            'download': '&#xe95b;',
            'chevron_direction_right': '&#xe95c;',
            'constructor': '&#xe95d;',
            'remove_style_filled': '&#xe95e;',
            'search': '&#xe95f;',
            'energy': '&#xe960;',
            'naver': '&#xe961;',
            'attention': '&#xe962;',
            'close_style_border': '&#xe963;',
            'chevron_direction_expand_vertical': '&#xe964;',
            'ongoing': '&#xe965;',
            'arrow_triangle_direction_left': '&#xe966;',
            'star_style_border': '&#xe967;',
            'audit': '&#xe968;',
            'location_company_style_border': '&#xe969;',
            'tooltip': '&#xe96a;',
            'arrow_direction_up': '&#xe96b;',
            'radio_state_normal': '&#xe96c;',
            'info_border': '&#xe96d;',
            'instagram': '&#xe96e;',
            'interaction': '&#xe96f;',
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
