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
            'arrow_directiondiagonal_left': '&#xe900;',
            'arrow_directiondown': '&#xe901;',
            'arrow_directionleft': '&#xe902;',
            'arrow_directionright': '&#xe903;',
            'arrow_directionup': '&#xe904;',
            'arrow_triangle_directiondown': '&#xe905;',
            'arrow_triangle_directionleft': '&#xe906;',
            'arrow_triangle_directionright': '&#xe907;',
            'arrow_triangle_directionup': '&#xe908;',
            'checkbox': '&#xe909;',
            'checkbox_statejust_check_icon': '&#xe90a;',
            'chevron_directiondown': '&#xe90d;',
            'chevron_directionexpand_vertical': '&#xe90e;',
            'chevron_directionfold_vertical': '&#xe90f;',
            'chevron_directionleft': '&#xe910;',
            'chevron_directionright': '&#xe911;',
            'chevron_directionup': '&#xe912;',
            'close_styleborder': '&#xe913;',
            'close_stylefill': '&#xe914;',
            'delete_bin_styleborder': '&#xe915;',
            'delete_bin_stylefilled': '&#xe916;',
            'envelope_stateinvite': '&#xe917;',
            'envelope_stateopened': '&#xe918;',
            'envelope_statesealed': '&#xe919;',
            'ic_add': '&#xe91c;',
            'ic_business_management': '&#xe91d;',
            'ic_calendar': '&#xe91e;',
            'ic_Default': '&#xe91f;',
            'ic_done_all': '&#xe920;',
            'ic_download': '&#xe921;',
            'ic_exterminal_link': '&#xe922;',
            'ic_facebook': '&#xe923;',
            'ic_file': '&#xe924;',
            'ic_find_on_map': '&#xe925;',
            'ic_gauge': '&#xe926;',
            'ic_goto': '&#xe927;',
            'ic_helpdesk': '&#xe928;',
            'ic_helpdesk_2': '&#xe929;',
            'ic_info_border': '&#xe92a;',
            'ic_info_fill': '&#xe92b;',
            'ic_instagram': '&#xe92c;',
            'ic_interaction': '&#xe92d;',
            'ic_line_chart': '&#xe92e;',
            'ic_menu': '&#xe92f;',
            'ic_naver': '&#xe930;',
            'ic_notification': '&#xe931;',
            'ic_pin': '&#xe932;',
            'ic_print': '&#xe933;',
            'ic_remove_file': '&#xe934;',
            'ic_request_again': '&#xe935;',
            'ic_request_again_2': '&#xe936;',
            'ic_search': '&#xe937;',
            'ic_setting': '&#xe938;',
            'ic_tooltip': '&#xe939;',
            'ic_tune': '&#xe93a;',
            'ic_write': '&#xe93b;',
            'img_attention': '&#xe93c;',
            'img_audit': '&#xe93d;',
            'img_calendar_time': '&#xe93e;',
            'img_capital': '&#xe93f;',
            'img_constructor': '&#xe940;',
            'img_flag_styleborder': '&#xe941;',
            'img_flag_stylefill': '&#xe942;',
            'img_hand_styleborder': '&#xe943;',
            'img_hand_stylefill': '&#xe944;',
            'img_location_company_styleborder': '&#xe945;',
            'img_location_company_stylefill': '&#xe946;',
            'img_make_new_project': '&#xe949;',
            'img_off': '&#xe94a;',
            'img_on': '&#xe94b;',
            'img_ongoing': '&#xe94c;',
            'img_panel_typeauction': '&#xe94e;',
            'img_panel_typebuilt': '&#xe94f;',
            'img_panel_typefield': '&#xe950;',
            'img_panel_typeroof': '&#xe951;',
            'img_question': '&#xe952;',
            'img_quote_typeleft': '&#xe953;',
            'img_quote_typeright': '&#xe954;',
            'person_styleborder': '&#xe987;',
            'person_stylefilled': '&#xe988;',
            'phone_styleborder': '&#xe989;',
            'push_stateactive': '&#xe98b;',
            'push_statedefault': '&#xe98c;',
            'radio_statechecked': '&#xe98d;',
            'radio_statenormal': '&#xe990;',
            'remove_styleborder': '&#xe992;',
            'remove_stylefilled': '&#xe993;',
            'sort_directionascending': '&#xe994;',
            'sort_directiondescending': '&#xe995;',
            'star_styleborder': '&#xe996;',
            'star_stylefill': '&#xe997;',
            'upload_file_stateDefault': '&#xe99a;',
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
