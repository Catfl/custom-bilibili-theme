// ==UserScript==
// @name         Custom Bilibili Theme
// @namespace    http://legendword.com
// @version      0.2
// @description  Sets a custom theme on most Bilibili pages
// @author       Legendword
// @match        https://*.bilibili.com/*
// @grant        GM_addStyle
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';
    GM_addStyle(`
:root {
  --main-color: #fff;
  --main-background: #000;
  --secondary-color: #999;
  --secondary-background: #222;
  --main-border: #454545;
  --light-background: #767676;
  --active-color: #00a1d6;
}
`);
    GM_addStyle(`

html, #app, body, .spread-module .num {
  background: var(--main-background);
}
.col-full, .bb-comment, #page-index>*, #page-index .col-2 .section, #page-dynamic .card {
  background: var(--main-background) !important;
}
a {
  color: var(--main-color);
}
body {
  color: var(--main-color) !important;
}


#page-follows .follow-sidenav .follow-list-container .follow-item.cur .be-dropdown-trigger .icon-ic_more, #page-follows .follow-sidenav .follow-list-container .follow-item.cur .num, #page-follows .follow-sidenav .follow-list-container .follow-item.cur .text, .sub-tabs span, .pgc-space-follow-item .pgc-item-info .pgc-item-title, .text.router-link-exact-active.router-link-active, .van-popper-avatar .nickname, .video-info .line-2, .van-popover, .im-list-box, .content, input, .breadcrumb .item.cur, .card .main-content .user-name a, .loading-content, .tc-black, .g-search input, .be-dropdown-item, .section-title, .tag, .name, .title, .ex-title, .n a.n-data:not(:hover) .n-data-v, .n div.n-data .n-data-v, .n .n-inner, .m-layer, .opera-list *, .up-info .u-info .name .username, .bb-comment .comment-header .tabs-order li, .comment-bilibili-fold .comment-header .tabs-order li, .online, .online > a, .con > li > a, .link, .tit, .spread-module .t, .tags *:not(i), .ri-title, .link-more, .more-link {
  color: var(--main-color) !important;
}
.fans-action-follow, .btn.idc-btn.ghost, #page-follows .list-item .desc, #page-setting .setting-privacy-item .setting-privacy-name, .pgc-space-follow-item .pgc-item-info .pgc-item-desc, .van-popper-avatar .links .link-title, .van-popper-avatar .count-item:not(:hover) .item-value, .international-header a, .van-popover a, .van-popper-avatar .level-intro, .van-popper-avatar .level-info .grade, .more-btn, .vip-m .bubble-traditional .recommand .bubble-col .item .recommand-link, .history-item *, .suggest-item *:not(.suggest_high_light), .i-m-btn, s#page-index .col-2 .section .user-auth.no-auth .no-auth-title .goto-auth, .tag *:not(i), .bui-collapse-header, .bui-collapse-header *, .bili-header-m, .bili-header-m *, .up-info .u-info .name .message, .text, .text-con, .video-desc *, .activity-m .inside-wrp *, .bilibili-player-video-info {
  color: var(--secondary-color) !important;
}
#id-card, #page-dynamic .col-2 .section, .channel-menu-mini, .van-popper-avatar .level-intro, .van-popover, .im-list-box, .out-container, .bilibili-search-history, .bilibili-search-suggest, #page-video #submit-video-type-filter, .card-content .repost, .card-content .not-support, .card-content .deleted, .loading-content, .vote-container, .music-container, .video-container, .be-dropdown-menu, #page-index #i-ann-content textarea, .tag, .tag *:not(i), .bili-header-m>.nav-menu, .b-line span, .n .n-inner, .m-layer, .opera-list, .btn-add, .bilibili-player-video-panel, .profile-m, .sub-nav, .bilibili-suggest, .list-box, .list-box .item, .online, .contact-help, .mini-header__content, .bui-collapse-body *, .bilibili-player-video-sendbar, .bili-dropdown, .bili-dropdown *:not(i), .link-more, .more-link, .read-push, .tips {
  background: var(--secondary-background) !important;
}
#page-dynamic .col-2 .section, .bilibili-search-history, .bilibili-search-suggest, input[type=text], .vote-container, .music-container, .video-container, #page-dynamic .card, .section .operation, .be-dropdown-menu, .section .more, .i-m-r2, #page-index>*, #page-index .col-2 .section, .online, .link-more, .more-link, .bili-dropdown, .bili-dropdown *, .read-push, .tips, .bilibili-suggest, .activity-m .inside-wrp, .m-layer, .tag, .tag *:not(i) {
  border-color: var(--main-border) !important;
}
.pgc-space-follow-item .pgc-item-info:hover .pgc-item-title {
  color: var(--active-color) !important;
}


.fans-action-follow, .btn.idc-btn.ghost, .more-btn, .profile-m .member-bottom, .g-search>input, #nav_searchform {
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