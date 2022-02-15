import { useEffect, useState } from "react";
import "./app.css";
import Snackbar from "./Snackbar";

function App() {
  const [iconName, setIconName] = useState();
  const [code, setCode] = useState();
  const [copyed, setCopyed] = useState(false);

  const handleIconClick = (e) => {
    const selected = e.target.className;
    if (selected.slice(0, 5) === "icon-") {
      setIconName(selected.slice(5));
    }
  };

  const handleCopy = text => {
    doCopy(text);
    setCopyed(true);
    setTimeout(() => setCopyed(prev => !prev), 1000);
  }

  useEffect(() => {
    iconName && setCode(`<span className="icon-${iconName}"></span>`);
  }, [iconName]);

  return (
    <div className="app">
      <h2>Energyx Icons</h2>
      <div className="energyx-icon">
        <div className="container" onClick={handleIconClick}>
          <div className="icon-arrow_directiondiagonal_left"></div>
          <div className="icon-arrow_directiondown"></div>
          <div className="icon-arrow_directionleft"></div>
          <div className="icon-arrow_directionright"></div>
          <div className="icon-arrow_directionup"></div>
          <div className="icon-arrow_triangle_directiondown"></div>
          <div className="icon-arrow_triangle_directionleft"></div>
          <div className="icon-arrow_triangle_directionright"></div>
          <div className="icon-arrow_triangle_directionup"></div>
          <div className="icon-checkbox"></div>
          <div className="icon-checkbox_statejust_check_icon"></div>
          <div className="icon-chevron_directiondown"></div>
          <div className="icon-chevron_directionexpand_vertical"></div>
          <div className="icon-chevron_directionfold_vertical"></div>
          <div className="icon-chevron_directionleft"></div>
          <div className="icon-chevron_directionright"></div>
          <div className="icon-chevron_directionup"></div>
          <div className="icon-close_styleborder"></div>
          <div className="icon-close_stylefill"></div>
          <div className="icon-delete_bin_styleborder"></div>
          <div className="icon-delete_bin_stylefilled"></div>
          <div className="icon-envelope_stateinvite"></div>
          <div className="icon-envelope_stateopened"></div>
          <div className="icon-envelope_statesealed"></div>
          <div className="icon-ic_add"></div>
          <div className="icon-ic_business_management"></div>
          <div className="icon-ic_calendar"></div>
          <div className="icon-ic_Default"></div>
          <div className="icon-ic_done_all"></div>
          <div className="icon-ic_download"></div>
          <div className="icon-ic_exterminal_link"></div>
          <div className="icon-ic_facebook"></div>
          <div className="icon-ic_file"></div>
          <div className="icon-ic_find_on_map"></div>
          <div className="icon-ic_gauge"></div>
          <div className="icon-ic_goto"></div>
          <div className="icon-ic_helpdesk"></div>
          <div className="icon-ic_helpdesk_2"></div>
          <div className="icon-ic_info_border"></div>
          <div className="icon-ic_info_fill"></div>
          <div className="icon-ic_instagram"></div>
          <div className="icon-ic_interaction"></div>
          <div className="icon-ic_line_chart"></div>
          <div className="icon-ic_menu"></div>
          <div className="icon-ic_naver"></div>
          <div className="icon-ic_notification"></div>
          <div className="icon-ic_pin"></div>
          <div className="icon-ic_print"></div>
          <div className="icon-ic_remove_file"></div>
          <div className="icon-ic_request_again"></div>
          <div className="icon-ic_request_again_2"></div>
          <div className="icon-ic_search"></div>
          <div className="icon-ic_setting"></div>
          <div className="icon-ic_tooltip"></div>
          <div className="icon-ic_tune"></div>
          <div className="icon-ic_write"></div>
          <div className="icon-img_attention"></div>
          <div className="icon-img_audit"></div>
          <div className="icon-img_calendar_time"></div>
          <div className="icon-img_capital"></div>
          <div className="icon-img_constructor"></div>
          <div className="icon-img_flag_styleborder"></div>
          <div className="icon-img_flag_stylefill"></div>
          <div className="icon-img_hand_styleborder"></div>
          <div className="icon-img_hand_stylefill"></div>
          <div className="icon-img_location_company_styleborder"></div>
          <div className="icon-img_location_company_stylefill"></div>
          <div className="icon-img_make_new_project"></div>
          <div className="icon-img_off"></div>
          <div className="icon-img_on"></div>
          <div className="icon-img_ongoing"></div>
          <div className="icon-img_panel_typeauction"></div>
          <div className="icon-img_panel_typebuilt"></div>
          <div className="icon-img_panel_typefield"></div>
          <div className="icon-img_panel_typeroof"></div>
          <div className="icon-img_question"></div>
          <div className="icon-img_quote_typeleft"></div>
          <div className="icon-img_quote_typeright"></div>
          <div className="icon-person_styleborder"></div>
          <div className="icon-person_stylefilled"></div>
          <div className="icon-phone_styleborder"></div>
          <div className="icon-push_stateactive"></div>
          <div className="icon-push_statedefault"></div>
          <div className="icon-radio_statechecked"></div>
          <div className="icon-radio_statenormal"></div>
          <div className="icon-remove_styleborder"></div>
          <div className="icon-remove_stylefilled"></div>
          <div className="icon-sort_directionascending"></div>
          <div className="icon-sort_directiondescending"></div>
          <div className="icon-star_styleborder"></div>
          <div className="icon-star_stylefill"></div>
          <div className="icon-upload_file_stateDefault"></div>
        </div>
      </div>
      {iconName && (
        <>
          <div className="energyx-icon iconImg">{iconName}</div>
          <h3>
            name
            <div className="copy" onClick={() => handleCopy(iconName)}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M64 464H288C296.8 464 304 456.8 304 448V384H352V448C352 483.3 323.3 512 288 512H64C28.65 512 0 483.3 0 448V224C0 188.7 28.65 160 64 160H128V208H64C55.16 208 48 215.2 48 224V448C48 456.8 55.16 464 64 464zM160 64C160 28.65 188.7 0 224 0H448C483.3 0 512 28.65 512 64V288C512 323.3 483.3 352 448 352H224C188.7 352 160 323.3 160 288V64zM224 304H448C456.8 304 464 296.8 464 288V64C464 55.16 456.8 48 448 48H224C215.2 48 208 55.16 208 64V288C208 296.8 215.2 304 224 304z" />
              </svg>
            </div>
          </h3>
          <div>{iconName}</div>
          <h3>
            code
            <div className="copy" onClick={() => handleCopy(code)}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M64 464H288C296.8 464 304 456.8 304 448V384H352V448C352 483.3 323.3 512 288 512H64C28.65 512 0 483.3 0 448V224C0 188.7 28.65 160 64 160H128V208H64C55.16 208 48 215.2 48 224V448C48 456.8 55.16 464 64 464zM160 64C160 28.65 188.7 0 224 0H448C483.3 0 512 28.65 512 64V288C512 323.3 483.3 352 448 352H224C188.7 352 160 323.3 160 288V64zM224 304H448C456.8 304 464 296.8 464 288V64C464 55.16 456.8 48 448 48H224C215.2 48 208 55.16 208 64V288C208 296.8 215.2 304 224 304z" />
              </svg>
            </div>
          </h3>
          <div>{code}</div>
        </>
      )}
      {copyed && <Snackbar/>}
    </div>
  );
}

function doCopy(text) {
  if (!document.queryCommandSupported("copy")) {
    return alert("복사하기가 지원되지 않는 브라우저입니다.");
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.style.top = 0;
  textarea.style.left = 0;
  textarea.style.position = "fixed";

  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}

export default App;
