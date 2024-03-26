// ==UserScript==
// @name         B站网页主题-柠檬绿-0.2.2-beta
// @namespace    http://legendword.com
// @version      0.2.2-beta
// @description  自动更换B站网页背景主题-主题颜色柠檬绿
// @author       Legendword/Catf_lin
// @match        https://*.bilibili.com/*
// @grant        GM_addStyle
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';
    GM_addStyle(`
:root {
  --light-background: #afff8f;
  --Ga11: #06af00ba;
  --Ga2: #55fe54;
  --Ga0_s: #e2ff67;
  --main-color: #00610b;
  --main-background: #ebffcd;
  --secondary-color: #00610b;
  --secondary-background: #e2ff678f;
  --main-border: #e2ff67;
  --light-background: #b2ff8a;
  --active-color: #00a1d6;
  --line_regular: #59ff8b;
  --bg1: #ebffcd73;
  --bg3: #e2ff67;
  --bg1_float: #e2ff6759;
  --graph_bg_regular: #e2ff67;
  --text_white: #e2ff67;
  --text2: #00610b;
  --text3: #3fa44a;
}
`);
    GM_addStyle(`
.single-card.floor-card .layer[data-v-1ae530d2] {
    background: #def589b5;
}
.mini-header .left-entry .mini-header__title, .mini-header .left-entry .entry-title, .mini-header .left-entry .default-entry, .mini-header .left-entry .loc-mc-box__text, .mini-header .left-entry .download-entry, .mini-header .left-entry .loc-entry {
    color: #266001;
}
.suggest-wrap[data-v-340b780a], .small-item.disabled .disabled-cover, #page-fav .fav-main .search-input input {
    background: #e9ffb7ab !important;
}
.international-header .mini-type, .van-popover .mini-type {
    background: var(--Ga0_s) !important;
}
.bili-header .search-panel {
    width: 100%;
    max-height: 612px;
    overflow-y: auto;
    background: #ebffcd73;
    border: 1px solid var(--line_regular);
    border-top: none;
    border-radius: 0 0 8px 8px;
    padding: 13px 0 16px;
    -webkit-font-smoothing: antialiased;
}
.header[data-v-267dc8b9] {
    background: #fbd637ba !important;
}
.notice_wrap {
    background: #faec6db8 !important;
}
.el-popover {
    background: #d9ffc1a8;
}
.new-link-top-wrap .new-link-top-container {
    background: #b8ff49 !important;
}
.cc-article-wrp .article-card, .text-article-wrp .head-stat, .text-article-wrp .article-card, .bcc-table__wrap table thead tr th, .medal, micro-app[name=data-center-web] .data-center[data-v-1c566b20], micro-app[name=data-center-web] .core-data[data-v-d1b8918a], #bili-data-center .dc-page, .dc-section1 *, .danmu-container *, .assist-wrap .assist-log header .tools .search-wrp input[type=text], .assist-wrap .assist-log header .tools .ui-calendar input[type=text], #app .cc-body.is-layout .cc-content-body .bcc-table__wrap tbody td, .danmu-report[data-v-08eeba32], micro-app *, .clue-layout[data-v-8ae9f1aa], .clue-page[data-v-8ae9f1aa], .base-wrapper, .charge-index-box, .charge-index-box *, .task-manage * {
    background: #d8ffbf !important;
}
.side-utils .utils-box, .help-wrap li *, .bmc-sticker-card .sticker-preview[data-v-c8da6508] {
    background-color: #ffce76 !important;
}
.simplebar-content-wrapper, #app .cc-body.is-layout .cc-content-body, .channel-option {
    background: #d6ffbd8a !important
}
#app .cc-body.is-layout, .data-card[data-v-5c270fe4], .bca-v-hr-box[data-v-c69410a4], .material-wrp[data-v-0610dbd6] {
    background: #d9ffc1 !important
}
.interact-wrap, .bill-wrap {
    background: #dcff58 !important;
}

.search-input-container .search-input-wrap[data-v-c9b7d6c2] {
    background: #c7ff7480 !important
}
.header-channel {
    width: 100%;
    min-width: 1100px;
    max-width: 2560px;
    display: flex;
    justify-content: center;
    background: #aad300a3;
    z-index: 1001;
    position: fixed;
    top: 63px;
    letter-spacing: 2px;
    box-shadow: 0 2px 4px rgba(0,0,0,.08);
    animation: headerSlideDown .2s linear forwards;
}
.space-left[data-v-20f352ce] {
    width: 140px;
    min-width: 140px;
    background-color: #c3ff40b8;
}
.card[data-v-fb77dc7a] {
    padding: 24px 16px;
    background-color: #c3ff40b8;
    -webkit-box-shadow: 0 2px 4px 0 rgba(121,146,185,0.54);
    box-shadow: 0 2px 4px 0 rgba(121,146,185,0.54);
    margin-bottom: 10px;
    border-radius: 4px;
}
.space-right .space-right-top .title[data-v-20f352ce] {
    height: 42px;
    background-color: #c3ff40b8;
    -webkit-box-shadow: 0 2px 4px 0 rgba(121,146,185,0.54);
    box-shadow: 0 2px 4px 0 rgba(121,146,185,0.54);
    -ms-flex-negative: 0;
    flex-shrink: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 0 16px;
    font-size: 15px;
    color: #666;
    border-radius: 4px;
}
.mini-header {
    background: var(--bg1);
    box-shadow: 0 2px 4px #00000014;
    background: #e2ff67;
}
.bili-header .search-panel {
    width: 100%;
    max-height: 612px;
    overflow-y: auto;
    background: #dbff7187;
    border: 1px solid #42ff34;
    border-top: none;
    border-radius: 0 0 8px 8px;
    padding: 13px 0 16px;
    -webkit-font-smoothing: antialiased;
}
.bili-header .center-search-container .center-search__bar #nav-searchform.is-actived .nav-search-content, .bili-header .center-search-container .center-search__bar #nav-searchform.is-focus .nav-search-content, .bili-header-channel-panel, .bili-header .anime, .bili-header .live-left, .bili-header .live-right, .bili-header .game, .bili-header .manga, .bili-header .avatar-panel-popover, .bili-header .vip-panel-popover .panel-v2, .bili-header .message-entry-popover .message-inner-list, .dynamic-panel-popover .header-tabs-panel, .dynamic-video, .favorite-panel-popover, .history-panel-popover .header-tabs-panel, .history-panel-popover .header-tabs-panel__content, .app-layout[data-v-0b4aa428], .box.clearfix, #page-series-index .channel-option.no-channel[data-v-493154f0] {
    background-color: #c4ff44ba;
}
html, #app, body, .spread-module .num, .live-box[data-v-5e2bd0c0] {
  background: var(--main-background);
}
.col-full, .bb-comment, #page-index>*, #page-index .col-2 .section, #page-dynamic .card, .bilibili-helper-dark-mode, .history-list .r-info, .b-head-search .b-head-search_input[_v-a93b2a70] {
  background: var(--main-background) !important;
}
a, .elec .elec-count {
  color: var(--main-color);
}
.bangumi-pagelistbox .p, .be-pager-item, .be-pager-next, .be-pager-prev, .space_input, #page-setting .setting-tag-list a, .bili-footer .footer-wrp {
    background-color: #ffef51d9 !important;
}
.bangumi-pagelistbox .custom-right .custom-right-inner.custompage {
    background-color: #ffef51d9 !important;
}
body {
  color: var(--main-color) !important;
}

.bili-dyn-card-video__body, .bili-dyn-content__orig.reference, .bili-dyn-up-list__next, .bili-topic-search__input, .bili-rich-textarea__inner, .bili-header input, .nav-search-content {
background-color: #eaffaed9 !important;
}
#page-follows .follow-sidenav .follow-list-container .follow-item.cur .be-dropdown-trigger .icon-ic_more, #page-follows .follow-sidenav .follow-list-container .follow-item.cur .num, #page-follows .follow-sidenav .follow-list-container .follow-item.cur .text, .sub-tabs span, .pgc-space-follow-item .pgc-item-info .pgc-item-title, .text.router-link-exact-active.router-link-active, .van-popper-avatar .nickname, .video-info .line-2, .van-popover, .im-list-box, .content, input, .breadcrumb .item.cur, .card .main-content .user-name a, .loading-content, .tc-black, .g-search input, .be-dropdown-item, .section-title, .tag, .name, .title, .ex-title, .n a.n-data:not(:hover) .n-data-v, .n div.n-data .n-data-v, .n .n-inner, .m-layer, .opera-list *, .up-info .u-info .name .username, .bb-comment .comment-header .tabs-order li, .comment-bilibili-fold .comment-header .tabs-order li, .online, .online > a, .con > li > a, .link, .tit, .spread-module .t, .tags *:not(i), .ri-title, .link-more, .more-link {
  color: var(--main-color) !important;
}
.fans-action-follow, .btn.idc-btn.ghost, #page-follows .list-item .desc, #page-setting .setting-privacy-item .setting-privacy-name, .pgc-space-follow-item .pgc-item-info .pgc-item-desc, .van-popper-avatar .links .link-title, .van-popper-avatar .count-item:not(:hover) .item-value, .international-header a, .van-popover a, .van-popper-avatar .level-intro, .van-popper-avatar .level-info .grade, .more-btn, .vip-m .bubble-traditional .recommand .bubble-col .item .recommand-link, .history-item *, .suggest-item *:not(.suggest_high_light), .i-m-btn, s#page-index .col-2 .section .user-auth.no-auth .no-auth-title .goto-auth, .tag *:not(i), .bui-collapse-header, .bui-collapse-header *, .bili-header-m, .bili-header-m *, .up-info .u-info .name .message, .text, .text-con, .video-desc *, .activity-m .inside-wrp *, .bilibili-player-video-info {
  color: var(--secondary-color) !important;
}
#id-card, #page-dynamic .col-2 .section, .channel-menu-mini, .van-popper-avatar .level-intro, .van-popover, .im-list-box, .out-container, .bilibili-search-history, .bilibili-search-suggest, #page-video #submit-video-type-filter, .card-content .repost, .card-content .not-support, .card-content .deleted, .loading-content, .vote-container, .music-container, .video-container, .be-dropdown-menu, #page-index #i-ann-content textarea, .tag, .tag *:not(i), .bili-header-m>.nav-menu, .b-line span, .n .n-inner, .m-layer, .opera-list, .btn-add, .bilibili-player-video-panel, .profile-m, .sub-nav, .bilibili-suggest, .list-box, .list-box .item, .online, .contact-help, .mini-header__content, .bui-collapse-body *, .bilibili-player-video-sendbar, .bili-dropdown, .bili-dropdown *:not(i), .link-more, .more-link, .read-push, .tips, .bili-header_bar, #nav-searchform {
  background: var(--secondary-background) !important;
}
#page-dynamic .col-2 .section, .bilibili-search-history, .bilibili-search-suggest, input[type=text], .vote-container, .music-container, .video-container, #page-dynamic .card, .section .operation, .be-dropdown-menu, .section .more, .i-m-r2, #page-index>*, #page-index .col-2 .section, .online, .link-more, .more-link, .bili-dropdown, .bili-dropdown *, .read-push, .tips, .bilibili-suggest, .activity-m .inside-wrp, .m-layer, .tag, .tag *:not(i) {
  border-color: var(--main-border) !important;
}
.pgc-space-follow-item .pgc-item-info:hover .pgc-item-title {
  color: var(--active-color) !important;
}
.message-list[data-v-ea8be482], .bili-dyn-card-pgc__body {
    background-color: #d2ff6ed6 !important;
}
.bili-im[data-v-06939a26], .config[data-v-6079aa28], .bili-dyn-item {
    background-color: #ebff7a !important;
}
.send-box[data-v-6f69db04] {
    background-color: #d2ff6edb;
}
.msg-push-new, .send-btn[data-v-6f69db04] {
    background: #ffef609c;
}
.fans-action-follow, .btn.idc-btn.ghost, .more-btn, .profile-m .member-bottom, .g-search>input, #nav_searchform, .bili-dyn-item__main, .bili-dyn-my-info, .bili-dyn-live-users, .bili-dyn-publishing, .topic-panel, .bili-dyn-my-info, .bili-dyn-live-users, .bili-dyn-publishing, .bili-dyn-up-list__window, .topic-panel, .bili-dyn-list-tabs__list, .fs-small {
  background: var(--main-border) !important;
}
.btn.idc-btn.default {
  color: var(--main-border) !important;
}
.btn.idc-btn.default, .list-create, .channel-menu-mini .box a:hover, .more-btn:hover, .van-popper-favorite .tab-item--normal:hover, .video-card:hover, .nav-search-btn {
  background: var(--light-background) !important;
}
.fans-action-follow, .btn.idc-btn, #nav_searchform, .g-search>input {
  border-color: var(--light-background) !important;
}
.col-full, .n .n-inner, .i-pin-c {
  box-shadow: 0 0 0 1px var(--main-border);
}
.b-line, .profile-m .member-menu, .bb-comment .comment-list .list-item .con, .comment-bilibili-fold .comment-list .list-item .con {
  border-top-color: var(--main-border) !important;
}
#page-follows .follow-sidenav .nav-container.follow-container, #page-follows .follow-sidenav, #page-follows .follow-main .follow-header.follow-header-info, .list-item, .van-popper-avatar .links, .van-popper-avatar .counts, .van-popper-avatar .coins, .van-popper-history .tab-header, .tab-bar, #page-index .channel .channel-item, .i-pin-v .be-tab, #page-index .col-2 .section-title, .primary-menu.border-b, .video-toolbar, .v-wrap .s_tag, .section {
  border-bottom-color: var(--main-border) !important;
}
#page-follows .follow-sidenav, .van-popper-favorite .tabs-panel, .contribution-sidenav, .i-m-upload {
  border-right-color: var(--main-border) !important;
}
#page-follows .follow-main, .channel-menu-mini .r-box, .contribution-sidenav~.main-content {
  border-left-color: var(--main-border) !important;
}
.con > li, .bilibili-player-video-inputbar, .bilibili-player-video-inputbar-wrap {
  border: none !important;
}
.bili-header-m {
  background: var(--secondary-background);
}
.nav-mask {
  background: none !important;
}
.bili-banner {
  opacity: 0.9;
}
.mascot {
  display: none;
}
.bui-collapse-body * {
  color: #6d757a !important;
}
.bui-collapse-header, .bui-collapse-header * {
  background: var(--main-border) !important;
  border-radius: 0 !important;
}
.bilibili-player {
  -webkit-box-shadow: 0 0 8px var(--secondary-background) !important;
  box-shadow-color: 0 0 8px var(--secondary-background) !important;
}
.bilibili-player-video-inputbar, .bilibili-player-video-inputbar-wrap {
  background: var(--secondary-color) !important;
}
.bui-button.bui-button-blue, .bui-button.bui-button-gray3:hover {
  background-color: #0183ae !important;
}
.u-link {
  color: var(--main-color) !important;
}
`);
})();
