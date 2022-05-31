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
            'geo_state_off': '&#xe904;',
            'hand_filled': '&#xe905;',
            'pin': '&#xe906;',
            'quote_type_left': '&#xe907;',
            'request_again': '&#xe908;',
            'money': '&#xe909;',
            'facebook': '&#xe90a;',
            'chevron_direction_fold_vertical': '&#xe90b;',
            'exterminal_link': '&#xe90c;',
            'arrow_triangle_direction_right': '&#xe90d;',
            'certification_id_certifying': '&#xe90e;',
            'goto': '&#xe90f;',
            'info_fill': '&#xe910;',
            'sort_direction_descending': '&#xe911;',
            'phone_style_border': '&#xe912;',
            'sort_direction_ascending': '&#xe913;',
            'quote_type_right': '&#xe914;',
            'arrow_triangle_direction_down': '&#xe915;',
            'passive': '&#xe916;',
            'again': '&#xe917;',
            'add': '&#xe918;',
            'opinion': '&#xe919;',
            'panel_roof': '&#xe91a;',
            'office': '&#xe91b;',
            'print': '&#xe91c;',
            'remove_style_border': '&#xe91d;',
            'person_style_border': '&#xe91e;',
            'Default': '&#xe91f;',
            'checkbox_state_checked': '&#xe920;',
            'checkbox_state_half': '&#xe921;',
            'user': '&#xe922;',
            'remove_style_basic': '&#xe923;',
            'setting': '&#xe924;',
            'calendar_time': '&#xe925;',
            'panel_auction': '&#xe926;',
            'done_all': '&#xe927;',
            'trade': '&#xe928;',
            'select_map': '&#xe929;',
            'push_state_default': '&#xe92a;',
            'delete_bin_style_filled': '&#xe92b;',
            'notification': '&#xe92c;',
            'chevron_direction_down': '&#xe92d;',
            'calendar': '&#xe92e;',
            'active': '&#xe92f;',
            'capital': '&#xe930;',
            'estimate_style_fill': '&#xe931;',
            'arrow_direction_diagonal_left': '&#xe932;',
            'upload_file_state_Default': '&#xe933;',
            'arrow_direction_down_outlined': '&#xe934;',
            'file': '&#xe935;',
            'youtube': '&#xe936;',
            'write': '&#xe937;',
            'close_style_outlined': '&#xe938;',
            'envelope_sealed': '&#xe939;',
            'checkbox_state_normal': '&#xe93a;',
            'flag_stroke': '&#xe93b;',
            'gauge': '&#xe93c;',
            'panel_field': '&#xe93d;',
            'star_style_fill': '&#xe93e;',
            'certification_id_fail': '&#xe93f;',
            'tune': '&#xe940;',
            'make_new_project': '&#xe941;',
            'chevron_direction_left': '&#xe942;',
            'add_outlined': '&#xe943;',
            'business_management': '&#xe944;',
            'push_state_active': '&#xe945;',
            'envelope_opened': '&#xe946;',
            'radio_state_checked': '&#xe947;',
            'environment': '&#xe948;',
            'estimate': '&#xe949;',
            'envelope_invite': '&#xe94a;',
            'person_style_filled': '&#xe94b;',
            'chevron_direction_up': '&#xe94c;',
            'estimate_style_border': '&#xe94d;',
            'menu': '&#xe94e;',
            'helpdesk': '&#xe94f;',
            'flag_filled': '&#xe950;',
            'delete_bin_style_border': '&#xe951;',
            'find_on_map': '&#xe952;',
            'phone_style_fill': '&#xe953;',
            'location_company_style_fill': '&#xe954;',
            'arrow_triangle_direction_up': '&#xe955;',
            'question': '&#xe956;',
            'arrow_direction_right': '&#xe957;',
            'hand_stroke': '&#xe958;',
            'line_chart': '&#xe959;',
            'checkbox_state_just_check_icon': '&#xe95a;',
            'arrow_direction_left': '&#xe95b;',
            'download': '&#xe95c;',
            'chevron_direction_right': '&#xe95d;',
            'constructor': '&#xe95e;',
            'geo_state_active': '&#xe95f;',
            'remove_style_filled': '&#xe960;',
            'search': '&#xe961;',
            'energy': '&#xe962;',
            'naver': '&#xe963;',
            'attention': '&#xe964;',
            'close_style_border': '&#xe965;',
            'chevron_direction_expand_vertical': '&#xe966;',
            'ongoing': '&#xe967;',
            'arrow_triangle_direction_left': '&#xe968;',
            'star_style_border': '&#xe969;',
            'audit': '&#xe96a;',
            'location_company_style_border': '&#xe96b;',
            'tooltip': '&#xe96c;',
            'arrow_direction_up': '&#xe96d;',
            'radio_state_normal': '&#xe96e;',
            'info_border': '&#xe96f;',
            'instagram': '&#xe970;',
            'interaction': '&#xe971;',
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
