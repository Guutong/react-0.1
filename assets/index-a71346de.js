import{j as e,R as i}from"./react-chunk-76f7fb99.js";import{c as a}from"./react-dom-chunk-b09bf327.js";import"./scheduler-chunk-765c72db.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();function d(){const n="Guutong",r="https://github.com/guutong",o="@guutong",c="https://cdn.discordapp.com/avatars/397430170484604928/a_98cb5088d11564bec96a4f9c99eb1326.gif",t="tong@odds.team",s="+(66) 781-XXXX";return e.jsxs("section",{className:"flex flex-col items-center justify-center min-h-screen bg-gray-100 p-10 w-full",children:[e.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-start w-full bg-white p-10 rounded-xl",children:[e.jsx("img",{src:c,alt:"Profile",className:"w-48 h-48 object-cover rounded-full border-4 border-blue-200 mb-10 md:mb-0 md:mr-10"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-3xl font-bold text-gray-700 mb-4",children:`My name is ${n}.`}),e.jsxs("h5",{className:"text-gray-500 mb-2 flex",children:["Discord: ",e.jsx("p",{className:"text-blue-500 ml-2 mb-4",children:o})]}),e.jsxs("h5",{className:"text-gray-500 mb-2 flex",children:["Github: ",e.jsx("p",{className:"text-blue-500 ml-2 mb-4",children:r})]}),e.jsx("h5",{className:"text-gray-500 mb-2",children:"About me"}),e.jsx("p",{className:"text-xl text-gray-500 mb-4",children:"I'm person who love to code and learn new things."})]})]}),e.jsx("footer",{className:"w-full mt-20",children:e.jsxs("div",{className:"flex justify-between bg-white p-10 rounded-xl",children:[e.jsxs("div",{children:[e.jsx("h5",{className:"text-gray-500 mb-2",children:"Phone"}),e.jsx("p",{className:"text-blue-500",children:s})]}),e.jsxs("div",{children:[e.jsx("h5",{className:"text-gray-500 mb-2",children:"Drop your message"}),e.jsx("p",{className:"text-blue-500",children:t})]})]})})]})}a.createRoot(document.getElementById("root")).render(e.jsx(i.StrictMode,{children:e.jsx(d,{})}));