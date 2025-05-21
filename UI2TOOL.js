/**
 * UI2TOOL - UI Utility Library
 * --------------------
 * Version: 1.1.1
 * Fix : sửa lỗi cleanId bị cục bộ gây lỗi Alert()
 * -------------------- 
 * Updated : 21/5/2025
 * Author: github.com/nguyenhiep19891 (2TOOL member)
 * Description:
 *  - UI2TOOL cung cấp các hàm tiện ích UI: Tooltip, Toast, Alert (Modal)
 *  - Sử dụng: UI2TOOL.Tooltip, UI2TOOL.Toast, UI2TOOL.Alert
 *  - No external dependencies - fully self-contained
 * 
 * Example:
 *   // Global methods:
 *   UI2TOOL.Tooltip(element, "Tooltip content", "top");  // Direct call
 *   UI2TOOL.Toast("Message content");                    // Direct call
 *   UI2TOOL.Toast("Message content", { position: "top-right" }); // With position
 *   UI2TOOL.Alert("Alert content");                      // Direct call
 *
 *   // Traditional methods still work:
 *   UI2TOOL.Tooltip.setTooltip(element, "Tooltip content", "top");
 *   UI2TOOL.Toast.Show("Message content");
 *   UI2TOOL.Toast.Show("Message content", { position: "center" });
 *   UI2TOOL.Alert.Show("Alert content");
 * 
 * Instance Example:
 *   // Create custom instance with ID:
 *   const UI1 = new UI2TOOL('ui1-id');  // Creates <div id="ui1-id">
 *
 *   // Direct method calls:
 *   UI1.Tooltip(element, "Custom tooltip", "bottom");
 *   UI1.Toast("Custom toast message");
 *   UI1.Toast("Custom toast message", { position: "bottom-left" });
 *   UI1.Alert("Custom alert");
 *
 * Copyright (c) 2024
 */
(function (global) {
    // Default configuration
    let config = {
        rootClass: 'ui2tool-root',
        styleId: 'Lib2TOOL-style'
    };
    
    // Configuration API to customize UI2TOOL
    function configure(options = {}) {
        if (options.rootClass) {
            config.rootClass = options.rootClass;
        }
        if (options.styleId) {
            config.styleId = options.styleId;
        }
        
        // If root elements already exist with the default class, update them
        if (options.rootClass && options.rootClass !== 'ui2tool-root') {
            const defaultRoots = document.querySelectorAll('.ui2tool-root');
            defaultRoots.forEach(root => {
                root.classList.remove('ui2tool-root');
                root.classList.add(config.rootClass);
            });
            
            // Update the CSS with the new root class
            updateRootClassInCSS();
        }
        
        return config; // Return current config
    }
    
    // Update CSS selectors when root class changes
    function updateRootClassInCSS() {
        const styleEl = document.getElementById(config.styleId);
        if (styleEl) {
            const updatedCSS = LIB2TOOL_CSS.replace(/\.ui2tool-root/g, '.' + config.rootClass);
            styleEl.innerHTML = updatedCSS;
        }
    }

    // All CSS needed for the library to function
    const LIB2TOOL_CSS = `
/* Base styles */
.ui2tool-root * {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

/* Common Utilities */
.ui2tool-root .u2t-flex {
    display: flex;
}
.ui2tool-root .u2t-flex-col {
    flex-direction: column;
}
.ui2tool-root .u2t-items-center {
    align-items: center;
}
.ui2tool-root .u2t-justify-center {
    justify-content: center;
}
.ui2tool-root .u2t-justify-between {
    justify-content: space-between;
}
.ui2tool-root .u2t-w-full {
    width: 100%;
}
.ui2tool-root .u2t-h-full {
    height: 100%;
}
.ui2tool-root .u2t-p-2 {
    padding: 0.5rem;
}
.ui2tool-root .u2t-p-3 {
    padding: 0.75rem;
}
.ui2tool-root .u2t-p-4 {
    padding: 1rem;
}
.ui2tool-root .u2t-px-3 {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
}
.ui2tool-root .u2t-py-2 {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
}
.ui2tool-root .u2t-px-4 {
    padding-left: 1rem;
    padding-right: 1rem;
}
.ui2tool-root .u2t-py-2 {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
}
.ui2tool-root .u2t-m-0 {
    margin: 0;
}
.ui2tool-root .u2t-mb-2 {
    margin-bottom: 0.5rem;
}
.ui2tool-root .u2t-ml-2 {
    margin-left: 0.5rem;
}
.ui2tool-root .u2t-mr-2 {
    margin-right: 0.5rem;
}
.ui2tool-root .u2t-ml-auto {
    margin-left: auto;
}
.ui2tool-root .u2t-gap-2 {
    gap: 0.5rem;
}
.ui2tool-root .u2t-rounded {
    border-radius: 0.25rem;
}
.ui2tool-root .u2t-shadow {
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}
.ui2tool-root .u2t-relative {
    position: relative;
}
.ui2tool-root .u2t-fixed {
    position: fixed;
}
.ui2tool-root .u2t-absolute {
    position: absolute;
}
.ui2tool-root .u2t-z-50 {
    z-index: 50;
}
.ui2tool-root .u2t-invisible {
    visibility: hidden;
}
.ui2tool-root .u2t-text-white {
    color: white;
}
.ui2tool-root .u2t-text-dark {
    color: #333;
}
.ui2tool-root .u2t-bg-dark {
    background-color: #333;
}
.ui2tool-root .u2t-bg-white {
    background-color: white;
}
.ui2tool-root .u2t-border {
    border: 1px solid #e0e0e0;
}
.ui2tool-root .u2t-border-t {
    border-top: 1px solid #e0e0e0;
}
.ui2tool-root .u2t-border-b {
    border-bottom: 1px solid #e0e0e0;
}

/* Toast animations */
.ui2tool-root .toast-animate-border {
    position: relative;
    overflow: visible;
    border-radius: 0.5rem;
    background: #fff;
}
.ui2tool-root .toast-animate-border .toast-border-effect {
    display: none;
}
.ui2tool-root .toast-animate-border::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 0.5rem;
    pointer-events: none;
    z-index: 2;
    border: 1.5px solid transparent;
    box-sizing: border-box;
    background: linear-gradient(90deg, #fffbe6, #ffe066, #ffb300, #fffbe6) border-box;
    background-size: 200%;
    animation: steam 1.6s linear 0s 1 both, border-fadeout 0.2s linear 1.3s 1 forwards;
    -webkit-background-clip: border-box;
    background-clip: border-box;
    mask:
        linear-gradient(#fff 0 0) content-box, 
        linear-gradient(#fff 0 0) border-box;
    mask-composite: exclude;
    -webkit-mask:
        linear-gradient(#fff 0 0) content-box, 
        linear-gradient(#fff 0 0) border-box;
    -webkit-mask-composite: xor;
    opacity: 1;
}
@keyframes steam {
    0% { background-position: 0 0; }
    100% { background-position: 200% 0; }
}
@keyframes border-fadeout {
    to { opacity: 0; }
}

/* Tooltip styles */
.ui2tool-root .u2t-tooltip {
    position: absolute;
    pointer-events: none;
    z-index: 9999;
    background-color: #333;
    color: white;
    padding: 0.5rem 0.75rem;
    border-radius: 0.25rem;
    font-size: 0.875rem;
    max-width: 250px;
    opacity: 0;
    transition: opacity 0.2s;
}
.ui2tool-root .u2t-tooltip-arrow {
    width: 0; 
    height: 0; 
    position: absolute;
}
.ui2tool-root .u2t-tooltip[data-placement="top"] .u2t-tooltip-arrow {
    left: 50%; 
    bottom: -6px; 
    transform: translateX(-50%);
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid #333;
}
.ui2tool-root .u2t-tooltip[data-placement="bottom"] .u2t-tooltip-arrow {
    left: 50%; 
    top: -6px; 
    transform: translateX(-50%);
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 6px solid #333;
}
.ui2tool-root .u2t-tooltip[data-placement="left"] .u2t-tooltip-arrow {
    top: 50%; 
    right: -6px; 
    transform: translateY(-50%);
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
    border-left: 6px solid #333;
}
.ui2tool-root .u2t-tooltip[data-placement="right"] .u2t-tooltip-arrow {
    top: 50%; 
    left: -6px; 
    transform: translateY(-50%);
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
    border-right: 6px solid #333;
}

/* Toast styles */
.ui2tool-root .u2t-toast-container {
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    z-index: 9999;
    max-width: 320px;
}

/* Toast position variants */
.ui2tool-root .u2t-toast-container.position-top-left {
    top: 1rem;
    left: 1rem;
    bottom: auto;
    right: auto;
}
.ui2tool-root .u2t-toast-container.position-top-center {
    top: 1rem;
    left: 50%;
    transform: translateX(-50%);
    bottom: auto;
    right: auto;
}
.ui2tool-root .u2t-toast-container.position-top-right {
    top: 1rem;
    right: 1rem;
    bottom: auto;
    left: auto;
}
.ui2tool-root .u2t-toast-container.position-center-left {
    top: 50%;
    left: 1rem;
    transform: translateY(-50%);
    bottom: auto;
    right: auto;
}
.ui2tool-root .u2t-toast-container.position-center {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    bottom: auto;
    right: auto;
}
.ui2tool-root .u2t-toast-container.position-center-right {
    top: 50%;
    right: 1rem;
    transform: translateY(-50%);
    bottom: auto;
    left: auto;
}
.ui2tool-root .u2t-toast-container.position-bottom-left {
    bottom: 1rem;
    left: 1rem;
    top: auto;
    right: auto;
}
.ui2tool-root .u2t-toast-container.position-bottom-center {
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
    top: auto;
    right: auto;
}
.ui2tool-root .u2t-toast-container.position-bottom-right {
    bottom: 1rem;
    right: 1rem;
    top: auto;
    left: auto;
}

.ui2tool-root .u2t-toast {
    display: flex;
    align-items: center;
    width: 100%;
    min-width: 260px;
    max-width: 320px;
    margin-bottom: 0.5rem;
    border-radius: 0.5rem;
    background: white;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    overflow: hidden;
}
.ui2tool-root .u2t-toast-content {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0.75rem;
}
.ui2tool-root .u2t-toast-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    margin-right: 0.75rem;
}
.ui2tool-root .u2t-toast-icon.success {
    background-color: rgba(0, 200, 83, 0.1);
    color: rgb(0, 200, 83);
}
.ui2tool-root .u2t-toast-icon.error {
    background-color: rgba(255, 0, 0, 0.1);
    color: rgb(255, 0, 0);
}
.ui2tool-root .u2t-toast-icon.info {
    background-color: rgba(0, 112, 243, 0.1);
    color: rgb(0, 112, 243);
}
.ui2tool-root .u2t-toast-icon.warning {
    background-color: rgba(255, 171, 0, 0.1);
    color: rgb(255, 171, 0);
}
.ui2tool-root .u2t-toast-message {
    flex-grow: 1;
    font-size: 0.875rem;
    color: #333;
}
.ui2tool-root .u2t-toast-close {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.25rem;
    color: #888;
    padding: 0;
    margin-left: 0.5rem;
    line-height: 1;
}
.ui2tool-root .u2t-toast-close:hover {
    color: #333;
}

/* Modal styles */
.ui2tool-root .u2t-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: none;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 1rem;
}
.ui2tool-root .u2t-modal-dialog {
    background: white;
    border-radius: 0.5rem;
    max-width: 500px;
    width: 100%;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    max-height: 90vh;
    display: flex;
    flex-direction: column;
}
.ui2tool-root .u2t-modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid #e0e0e0;
}
.ui2tool-root .u2t-modal-title {
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0;
    color: #333;
}
.ui2tool-root .u2t-modal-close {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    padding: 0;
    color: #888;
    line-height: 1;
}
.ui2tool-root .u2t-modal-close:hover {
    color: #333;
}
.ui2tool-root .u2t-modal-body {
    padding: 1rem;
    overflow-y: auto;
}
.ui2tool-root .u2t-modal-footer {
    display: flex;
    justify-content: flex-end;
    padding: 1rem;
    border-top: 1px solid #e0e0e0;
    gap: 0.5rem;
}
.ui2tool-root .u2t-btn {
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    font-size: 0.875rem;
    cursor: pointer;
    border: none;
}
.ui2tool-root .u2t-btn-primary {
    background-color: #0070f3;
    color: white;
}
.ui2tool-root .u2t-btn-primary:hover {
    background-color: #0051cb;
}
.ui2tool-root .u2t-btn-secondary {
    background-color: #e0e0e0;
    color: #333;
}
.ui2tool-root .u2t-btn-secondary:hover {
    background-color: #d0d0d0;
}

/* Animations */
@keyframes shake {
    0% { transform: translateX(0); }
    20% { transform: translateX(-8px); }
    40% { transform: translateX(8px); }
    60% { transform: translateX(-6px); }
    80% { transform: translateX(6px); }
    100% { transform: translateX(0); }
}
.ui2tool-root .u2t-animate-shake {
    animation: shake 0.5s;
}
`;

    function injectCSS() {
        if (!document.getElementById(config.styleId)) {
            const style = document.createElement('style');
            style.id = config.styleId;
            // Use the current config.rootClass when injecting CSS
            style.innerHTML = LIB2TOOL_CSS.replace(/\.ui2tool-root/g, '.' + config.rootClass);
            document.head.appendChild(style);
        }
    }

    // Create root container if not exists
    function ensureUIRoot() {
        // Check if the rootClass is an ID (starts with #)
        const isId = config.rootClass.startsWith('#');
        const selector = isId ? config.rootClass : '.' + config.rootClass;
        
        let root = document.querySelector(selector);
        if (!root) {
            root = document.createElement('div');
            if (isId) {
                root.id = config.rootClass.substring(1); // Remove the # from ID
            } else {
                root.className = config.rootClass;
            }
            document.body.appendChild(root);
        }
        return root;
    }

    // Define the global components first
    // --- Tooltip ---
    const Tooltip = (function() {
        let tooltipEl;
        let listeners = new WeakMap();
        
        function ensureTooltipEl() {
            if (!tooltipEl) {
                const root = ensureUIRoot();
                tooltipEl = document.createElement('div');
                tooltipEl.className = "u2t-tooltip u2t-invisible";
                tooltipEl.innerHTML = '<div class="u2t-tooltip-arrow"></div>';
                root.appendChild(tooltipEl);
            }
            return tooltipEl;
        }
        
        function setTooltip(element, content, position = 'top') {
            if (!element) return;
            if (listeners.has(element)) {
                const { mouseenter, mouseleave } = listeners.get(element);
                element.removeEventListener('mouseenter', mouseenter);
                element.removeEventListener('mouseleave', mouseleave);
            }
            const mouseenter = () => showTooltip(element, content, position);
            const mouseleave = () => hide();
            element.addEventListener('mouseenter', mouseenter);
            element.addEventListener('mouseleave', mouseleave);
            listeners.set(element, { mouseenter, mouseleave });
        }
        
        function showTooltip(element, content = '', position = 'top') {
            const tip = ensureTooltipEl();
            tip.innerHTML = content + '<div class="u2t-tooltip-arrow"></div>';
            tip.setAttribute('data-placement', position);
            
            tip.classList.remove('u2t-invisible');
            tip.style.opacity = '1';
            tip.style.display = 'block';
            
            const btnRect = element.getBoundingClientRect();
            const tipRect = tip.getBoundingClientRect();
            let top, left;
            switch (position) {
                case 'top':
                    top = btnRect.top - tipRect.height - 10 + window.scrollY;
                    left = btnRect.left + (btnRect.width - tipRect.width) / 2 + window.scrollX;
                    break;
                case 'bottom':
                    top = btnRect.bottom + 10 + window.scrollY;
                    left = btnRect.left + (btnRect.width - tipRect.width) / 2 + window.scrollX;
                    break;
                case 'left':
                    top = btnRect.top + (btnRect.height - tipRect.height) / 2 + window.scrollY;
                    left = btnRect.left - tipRect.width - 10 + window.scrollX;
                    break;
                case 'right':
                    top = btnRect.top + (btnRect.height - tipRect.height) / 2 + window.scrollY;
                    left = btnRect.right + 10 + window.scrollX;
                    break;
            }
            tip.style.top = top + 'px';
            tip.style.left = left + 'px';
        }
        
        function hide() {
            if (tooltipEl) {
                tooltipEl.classList.add('u2t-invisible');
                tooltipEl.style.opacity = '0';
                
                setTimeout(() => {
                    if (tooltipEl.classList.contains('u2t-invisible')) {
                        tooltipEl.style.display = 'none';
                    }
                }, 200);
            }
        }
        
        return {
            setTooltip,
            showTooltip,
            hide
        };
    })();

    // --- Toast ---
    const Toast = (function() {
        // Store containers for different positions
        let toastContainers = {};
        
        // Valid positions
        const validPositions = [
            'top-left', 'top-center', 'top-right',
            'center-left', 'center', 'center-right',
            'bottom-left', 'bottom-center', 'bottom-right'
        ];
        
        function ensureContainer(position = 'bottom-right') {
            // Validate position
            if (!validPositions.includes(position)) {
                console.warn(`Invalid toast position: ${position}. Using 'bottom-right' instead.`);
                position = 'bottom-right';
            }
            
            // Check if container for this position exists already
            if (!toastContainers[position]) {
                const root = ensureUIRoot();
                const containerClass = position === 'bottom-right' ? 
                    'u2t-toast-container' : 
                    `u2t-toast-container position-${position}`;
                
                // First check if it already exists in DOM
                let container = root.querySelector(`.u2t-toast-container.position-${position}`);
                if (!container) {
                    container = document.createElement('div');
                    container.className = containerClass;
                    root.appendChild(container);
                }
                
                toastContainers[position] = container;
            }
            
            return toastContainers[position];
        }
        
        function Show(message = "This is a toast message.", options = {}) {
            const position = options.position || 'bottom-right';
            const container = ensureContainer(position);
            const toast = document.createElement('div');
            toast.className = "u2t-toast toast-animate-border u2t-animate-shake";
            
            // Define icons for different toast types
            const icons = {
                success: `<div class="u2t-toast-icon success">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"/>
                    </svg>
                </div>`,
                error: `<div class="u2t-toast-icon error">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </div>`,
                info: `<div class="u2t-toast-icon info">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                    </svg>
                </div>`,
                warning: `<div class="u2t-toast-icon warning">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"/>
                        <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z"/>
                    </svg>
                </div>`
            };
            
            // Get toast type from options or infer from message
            let toastType = options.type || 'info';
            if (message.toLowerCase().includes('success') || message.toLowerCase().includes('thành công')) {
                toastType = 'success';
            } else if (message.toLowerCase().includes('error') || message.toLowerCase().includes('lỗi')) {
                toastType = 'error';
            } else if (message.toLowerCase().includes('warning') || message.toLowerCase().includes('cảnh báo')) {
                toastType = 'warning';
            }
            
            const icon = icons[toastType] || icons.info;
            
            toast.innerHTML = `
                <span class="toast-border-effect"></span>
                <div class="u2t-toast-content">
                    ${icon}
                    <div class="u2t-toast-message">${message}</div>
                    <button type="button" class="u2t-toast-close">&times;</button>
                </div>
            `;
            container.appendChild(toast);
            toast.querySelector('.u2t-toast-close').onclick = () => Hide(toast);
            setTimeout(() => { Hide(toast); }, options.duration || 3000);
            return toast;
        }
        
        function Hide(toastEl) {
            if (toastEl && toastEl.parentNode) {
                toastEl.parentNode.removeChild(toastEl);
            }
        }
        
        function RemoveAll() {
            // Clear all toast containers across all positions
            validPositions.forEach(position => {
                if (toastContainers[position]) {
                    toastContainers[position].innerHTML = '';
                }
            });
        }
        
        return {
            Show,
            Hide,
            RemoveAll,
            positions: validPositions
        };
    })();

    // --- Alert ---
    const Alert = {
        _modal: null,
        _closeBtn: null,
        _closeBtn2: null,
        _contentEl: null,
        _titleEl: null,
        _iconEl: null,
        _footerEl: null,
        _onClose: null,
        
        _ensureModal: function() {
            if (!this._modal) {
                const root = ensureUIRoot();
                const modal = document.createElement('div');
                modal.id = 'ui2tool-modal';
                modal.tabIndex = -1;
                modal.setAttribute('aria-hidden', 'true');
                modal.className = "u2t-modal";
                
                modal.innerHTML = `
                    <div class="u2t-modal-dialog">
                        <div class="u2t-modal-header">
                            <div class="u2t-flex u2t-items-center u2t-gap-2">
                                <span class="modal2tool-icon"></span>
                                <h3 class="u2t-modal-title modal2tool-title">Modal Title</h3>
                            </div>
                            <button type="button" class="u2t-modal-close" id="ui2tool-closeModalBtn">&times;</button>
                        </div>
                        <div class="u2t-modal-body modal2tool-content"></div>
                        <div class="u2t-modal-footer modal2tool-footer">
                            <button id="ui2tool-closeModalBtn2" type="button" class="u2t-btn u2t-btn-primary">Close</button>
                        </div>
                    </div>
                `;
                
                root.appendChild(modal);
                this._modal = modal;
                this._closeBtn = modal.querySelector('#ui2tool-closeModalBtn');
                this._closeBtn2 = modal.querySelector('#ui2tool-closeModalBtn2');
                this._contentEl = modal.querySelector('.modal2tool-content');
                this._titleEl = modal.querySelector('.modal2tool-title');
                this._iconEl = modal.querySelector('.modal2tool-icon');
                this._footerEl = modal.querySelector('.modal2tool-footer');
                
                // Setup event handlers
                this._closeBtn.onclick = this._closeBtn2.onclick = () => this.Hide();
                modal.addEventListener('click', (e) => {
                    if (e.target === modal) this.Hide();
                });
            }
        },
        
        Show: function(arg1, arg2, arg3) {
            this._ensureModal();
            let opts = {};
            if (typeof arg1 === "string" && typeof arg2 === "undefined") {
                opts.content = arg1;
                opts.title = "Thông báo";
            }
            else if (typeof arg1 === "string" && typeof arg2 === "string" && arguments.length <= 3) {
                opts.content = arg1;
                opts.title = arg2;
                if (typeof arg3 === "object") Object.assign(opts, arg3);
            }
            else if (typeof arg1 === "object") {
                opts = arg1;
            } else {
                opts = {};
            }
            
            const { 
                title = "Modal Title", 
                content = "", 
                icon = "", 
                buttons, 
                onShow, 
                onClose,
                position = "center" 
            } = opts;
            
            // Handle positioning
            this._modal.className = "u2t-modal";
            if (position !== "center") {
                this._modal.classList.add("position-" + position);
            }
            
            this._titleEl.innerHTML = title;
            this._contentEl.innerHTML = content;
            this._iconEl.innerHTML = icon || "";
            
            // Handle buttons
            if (buttons && Array.isArray(buttons) && buttons.length > 0) {
                this._footerEl.innerHTML = "";
                buttons.forEach(btn => {
                    const b = document.createElement('button');
                    b.type = "button";
                    b.className = btn.className || "u2t-btn u2t-btn-primary";
                    b.innerHTML = btn.label || "OK";
                    b.onclick = () => {
                        if (btn.onClick) btn.onClick();
                        if (btn.close !== false) this.Hide();
                    };
                    this._footerEl.appendChild(b);
                });
            } else {
                this._footerEl.innerHTML = `<button id="ui2tool-closeModalBtn2" type="button" class="u2t-btn u2t-btn-primary">Close</button>`;
                this._footerEl.querySelector('#ui2tool-closeModalBtn2').onclick = () => this.Hide();
            }
            
            this._modal.style.display = 'flex';
            if (typeof onShow === 'function') onShow();
            this._onClose = onClose;
        },
        
        Hide: function() {
            if (this._modal) {
                this._modal.style.display = 'none';
                if (typeof this._onClose === 'function') this._onClose();
            }
        },
        
        Remove: function() {
            if (this._modal) {
                this._modal.remove();
                this._modal = null;
            }
        }
    };

    // Core factory function to create UI2TOOL instances
    function createUI2TOOLInstance(customConfig = {}) {
        // Process rootClass to handle ID format
        if (typeof customConfig.rootClass === 'string') {
            // If it doesn't start with # or ., add # to make it an ID
            if (!customConfig.rootClass.startsWith('#') && !customConfig.rootClass.startsWith('.')) {
                customConfig.rootClass = '#' + customConfig.rootClass;
            }
        }
        
        // Merge configs
        const instanceConfig = {
            rootClass: customConfig.rootClass || config.rootClass,
            styleId: customConfig.styleId || config.styleId
        };
        
        // Get root container for this instance
        function getRoot() {
            const isId = instanceConfig.rootClass.startsWith('#');
            const selector = isId ? instanceConfig.rootClass : '.' + instanceConfig.rootClass;
            
            let root = document.querySelector(selector);
            if (!root) {
                root = document.createElement('div');
                if (isId) {
                    root.id = instanceConfig.rootClass.substring(1); // Remove the # from ID
                } else {
                    root.className = instanceConfig.rootClass;
                }
                document.body.appendChild(root);
            }
            return root;
        }
        
        // Inject CSS if needed for this specific instance
        if (customConfig.rootClass && customConfig.rootClass !== config.rootClass) {
            const customStyleId = instanceConfig.styleId + '-' + 
                (instanceConfig.rootClass.startsWith('#') ? 
                    instanceConfig.rootClass.substring(1) : instanceConfig.rootClass);
            
            if (!document.getElementById(customStyleId)) {
                const style = document.createElement('style');
                style.id = customStyleId;
                
                const cssSelector = instanceConfig.rootClass.startsWith('#') ?
                    '#' + instanceConfig.rootClass.substring(1) : // Handle ID correctly
                    '.' + instanceConfig.rootClass;
                
                style.innerHTML = LIB2TOOL_CSS.replace(/\.ui2tool-root/g, cssSelector);
                document.head.appendChild(style);
            }
        }
        
        // --- Tooltip ---
        const TooltipInstance = (function() {
            let tooltipEl;
            let listeners = new WeakMap();
            
            function ensureTooltipEl() {
                if (!tooltipEl) {
                    const root = getRoot();
                    tooltipEl = document.createElement('div');
                    tooltipEl.className = "u2t-tooltip u2t-invisible";
                    tooltipEl.innerHTML = '<div class="u2t-tooltip-arrow"></div>';
                    root.appendChild(tooltipEl);
                }
                return tooltipEl;
            }
            
            // Copy of the original Tooltip methods but using this instance's root
            function setTooltip(element, content, position = 'top') {
                // Same implementation as the original, but using local getRoot/ensureTooltipEl
                if (!element) return;
                if (listeners.has(element)) {
                    const { mouseenter, mouseleave } = listeners.get(element);
                    element.removeEventListener('mouseenter', mouseenter);
                    element.removeEventListener('mouseleave', mouseleave);
                }
                const mouseenter = () => showTooltip(element, content, position);
                const mouseleave = () => hide();
                element.addEventListener('mouseenter', mouseenter);
                element.addEventListener('mouseleave', mouseleave);
                listeners.set(element, { mouseenter, mouseleave });
            }
            
            function showTooltip(element, content = '', position = 'top') {
                // Same implementation as the original, but using local ensureTooltipEl
                const tip = ensureTooltipEl();
                tip.innerHTML = content + '<div class="u2t-tooltip-arrow"></div>';
                tip.setAttribute('data-placement', position);
                
                tip.classList.remove('u2t-invisible');
                tip.style.opacity = '1';
                tip.style.display = 'block';
                
                const btnRect = element.getBoundingClientRect();
                const tipRect = tip.getBoundingClientRect();
                let top, left;
                switch (position) {
                    case 'top':
                        top = btnRect.top - tipRect.height - 10 + window.scrollY;
                        left = btnRect.left + (btnRect.width - tipRect.width) / 2 + window.scrollX;
                        break;
                    case 'bottom':
                        top = btnRect.bottom + 10 + window.scrollY;
                        left = btnRect.left + (btnRect.width - tipRect.width) / 2 + window.scrollX;
                        break;
                    case 'left':
                        top = btnRect.top + (btnRect.height - tipRect.height) / 2 + window.scrollY;
                        left = btnRect.left - tipRect.width - 10 + window.scrollX;
                        break;
                    case 'right':
                        top = btnRect.top + (btnRect.height - tipRect.height) / 2 + window.scrollY;
                        left = btnRect.right + 10 + window.scrollX;
                        break;
                }
                tip.style.top = top + 'px';
                tip.style.left = left + 'px';
            }
            
            function hide() {
                if (tooltipEl) {
                    tooltipEl.classList.add('u2t-invisible');
                    tooltipEl.style.opacity = '0';
                    
                    setTimeout(() => {
                        if (tooltipEl.classList.contains('u2t-invisible')) {
                            tooltipEl.style.display = 'none';
                        }
                    }, 200);
                }
            }
            
            return {
                setTooltip,
                showTooltip,
                hide
            };
        })();
        
        // --- Toast ---
        const ToastInstance = (function() {
            // Store containers for different positions
            let toastContainers = {};
            
            // Valid positions
            const validPositions = [
                'top-left', 'top-center', 'top-right',
                'center-left', 'center', 'center-right',
                'bottom-left', 'bottom-center', 'bottom-right'
            ];
            
            function ensureContainer(position = 'bottom-right') {
                // Validate position
                if (!validPositions.includes(position)) {
                    console.warn(`Invalid toast position: ${position}. Using 'bottom-right' instead.`);
                    position = 'bottom-right';
                }
                
                // Check if container for this position exists already
                if (!toastContainers[position]) {
                    const root = getRoot();
                    const containerClass = position === 'bottom-right' ? 
                        'u2t-toast-container' : 
                        `u2t-toast-container position-${position}`;
                    
                    // First check if it already exists in DOM
                    let container = root.querySelector(`.u2t-toast-container.position-${position}`);
                    if (!container) {
                        container = document.createElement('div');
                        container.className = containerClass;
                        root.appendChild(container);
                    }
                    
                    toastContainers[position] = container;
                }
                
                return toastContainers[position];
            }
            
            function Show(message = "This is a toast message.", options = {}) {
                const position = options.position || 'bottom-right';
                const container = ensureContainer(position);
                const toast = document.createElement('div');
                toast.className = "u2t-toast toast-animate-border u2t-animate-shake";
                
                // Define icons for different toast types
                const icons = {
                    success: `<div class="u2t-toast-icon success">
                        <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"/>
                        </svg>
                    </div>`,
                    error: `<div class="u2t-toast-icon error">
                        <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </div>`,
                    info: `<div class="u2t-toast-icon info">
                        <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                        </svg>
                    </div>`,
                    warning: `<div class="u2t-toast-icon warning">
                        <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"/>
                            <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z"/>
                        </svg>
                    </div>`
                };
                
                // Get toast type from options or infer from message
                let toastType = options.type || 'info';
                if (message.toLowerCase().includes('success') || message.toLowerCase().includes('thành công')) {
                    toastType = 'success';
                } else if (message.toLowerCase().includes('error') || message.toLowerCase().includes('lỗi')) {
                    toastType = 'error';
                } else if (message.toLowerCase().includes('warning') || message.toLowerCase().includes('cảnh báo')) {
                    toastType = 'warning';
                }
                
                const icon = icons[toastType] || icons.info;
                
                toast.innerHTML = `
                    <span class="toast-border-effect"></span>
                    <div class="u2t-toast-content">
                        ${icon}
                        <div class="u2t-toast-message">${message}</div>
                        <button type="button" class="u2t-toast-close">&times;</button>
                    </div>
                `;
                container.appendChild(toast);
                toast.querySelector('.u2t-toast-close').onclick = () => Hide(toast);
                setTimeout(() => { Hide(toast); }, options.duration || 3000);
                return toast;
            }
            
            function Hide(toastEl) {
                if (toastEl && toastEl.parentNode) {
                    toastEl.parentNode.removeChild(toastEl);
                }
            }
            
            function RemoveAll() {
                // Clear all toast containers across all positions
                validPositions.forEach(position => {
                    if (toastContainers[position]) {
                        toastContainers[position].innerHTML = '';
                    }
                });
            }
            
            return {
                Show,
                Hide,
                RemoveAll,
                positions: validPositions
            };
        })();
        
        // --- Alert ---
        const AlertInstance = {
            _modal: null,
            _closeBtn: null,
            _closeBtn2: null,
            _contentEl: null,
            _titleEl: null,
            _iconEl: null,
            _footerEl: null,
            _onClose: null,
            _cleanId: null, // <--- ADD THIS LINE
            
            _ensureModal: function() {
                if (!this._modal) {
                    const root = getRoot();
                    const modal = document.createElement('div');
                    
                    // Remove the # from the ID if it exists to prevent double ## in selectors
                    const cleanId = instanceConfig.rootClass.startsWith('#') ? 
                        instanceConfig.rootClass.substring(1) : 
                        instanceConfig.rootClass;
                    this._cleanId = cleanId; // <--- SAVE cleanId TO INSTANCE
                    
                    modal.id = cleanId + '-modal';
                    modal.tabIndex = -1;
                    modal.setAttribute('aria-hidden', 'true');
                    modal.className = "u2t-modal";
                    
                    // Use the clean ID for button IDs to avoid invalid selectors
                    modal.innerHTML = `
                        <div class="u2t-modal-dialog">
                            <div class="u2t-modal-header">
                                <div class="u2t-flex u2t-items-center u2t-gap-2">
                                    <span class="modal2tool-icon"></span>
                                    <h3 class="u2t-modal-title modal2tool-title">Modal Title</h3>
                                </div>
                                <button type="button" class="u2t-modal-close" id="${cleanId}-closeModalBtn">&times;</button>
                            </div>
                            <div class="u2t-modal-body modal2tool-content"></div>
                            <div class="u2t-modal-footer modal2tool-footer">
                                <button id="${cleanId}-closeModalBtn2" type="button" class="u2t-btn u2t-btn-primary">Close</button>
                            </div>
                        </div>
                    `;
                    
                    root.appendChild(modal);
                    this._modal = modal;
                    this._closeBtn = modal.querySelector(`#${cleanId}-closeModalBtn`);
                    this._closeBtn2 = modal.querySelector(`#${cleanId}-closeModalBtn2`);
                    this._contentEl = modal.querySelector('.modal2tool-content');
                    this._titleEl = modal.querySelector('.modal2tool-title');
                    this._iconEl = modal.querySelector('.modal2tool-icon');
                    this._footerEl = modal.querySelector('.modal2tool-footer');
                    
                    // Setup event handlers
                    this._closeBtn.onclick = this._closeBtn2.onclick = () => this.Hide();
                    modal.addEventListener('click', (e) => {
                        if (e.target === modal) this.Hide();
                    });
                }
            },
            
            Show: function(arg1, arg2, arg3) {
                this._ensureModal();
                let opts = {};
                if (typeof arg1 === "string" && typeof arg2 === "undefined") {
                    opts.content = arg1;
                    opts.title = "Thông báo";
                }
                else if (typeof arg1 === "string" && typeof arg2 === "string" && arguments.length <= 3) {
                    opts.content = arg1;
                    opts.title = arg2;
                    if (typeof arg3 === "object") Object.assign(opts, arg3);
                }
                else if (typeof arg1 === "object") {
                    opts = arg1;
                } else {
                    opts = {};
                }
                
                const { 
                    title = "Modal Title", 
                    content = "", 
                    icon = "", 
                    buttons, 
                    onShow, 
                    onClose,
                    position = "center" 
                } = opts;
                
                // Handle positioning
                this._modal.className = "u2t-modal";
                if (position !== "center") {
                    this._modal.classList.add("position-" + position);
                }
                
                this._titleEl.innerHTML = title;
                this._contentEl.innerHTML = content;
                this._iconEl.innerHTML = icon || "";
                
                // Handle buttons
                if (buttons && Array.isArray(buttons) && buttons.length > 0) {
                    this._footerEl.innerHTML = "";
                    buttons.forEach(btn => {
                        const b = document.createElement('button');
                        b.type = "button";
                        b.className = btn.className || "u2t-btn u2t-btn-primary";
                        b.innerHTML = btn.label || "OK";
                        b.onclick = () => {
                            if (btn.onClick) btn.onClick();
                            if (btn.close !== false) this.Hide();
                        };
                        this._footerEl.appendChild(b);
                    });
                } else {
                    // Use this._cleanId instead of cleanId
                    this._footerEl.innerHTML = `<button id="${this._cleanId}-closeModalBtn2" type="button" class="u2t-btn u2t-btn-primary">Close</button>`;
                    this._footerEl.querySelector(`#${this._cleanId}-closeModalBtn2`).onclick = () => this.Hide();
                }
                
                this._modal.style.display = 'flex';
                if (typeof onShow === 'function') onShow();
                this._onClose = onClose;
            },
            
            Hide: function() {
                if (this._modal) {
                    this._modal.style.display = 'none';
                    if (typeof this._onClose === 'function') this._onClose();
                }
            },
            
            Remove: function() {
                if (this._modal) {
                    this._modal.remove();
                    this._modal = null;
                }
            }
        };
        
        // Configure method for this instance
        function configureInstance(options = {}) {
            if (options.rootClass) {
                instanceConfig.rootClass = options.rootClass;
            }
            
            return instanceConfig;
        }
        
        // Create direct function shortcuts
        const TooltipFunction = function(element, content, position) {
            return TooltipInstance.showTooltip(element, content, position);
        };
        
        // Copy all methods to the function
        Object.assign(TooltipFunction, TooltipInstance);
        
        // Create Toast function shortcut
        const ToastFunction = function(message, options) {
            return ToastInstance.Show(message, options);
        };
        
        // Copy all methods to the function
        Object.assign(ToastFunction, ToastInstance);
        
        // Create Alert function shortcut - FIX: Use AlertInstance instead of Alert
        const AlertFunction = function(arg1, arg2, arg3) {
            return AlertInstance.Show(arg1, arg2, arg3);
        };
        
        // Copy all methods to the function
        Object.assign(AlertFunction, AlertInstance);
        
        // Return the instance with both the functions and the objects
        return {
            Tooltip: TooltipFunction,
            Toast: ToastFunction,
            Alert: AlertFunction,
            configure: configureInstance,
            config: instanceConfig
        };
    }
    
    // Create direct function shortcuts for the global instance
    const TooltipFunction = function(element, content, position) {
        return Tooltip.showTooltip(element, content, position);
    };
    
    // Copy all methods to the function
    Object.assign(TooltipFunction, Tooltip);
    
    // Create Toast function shortcut
    const ToastFunction = function(message, options) {
        return Toast.Show(message, options);
    };
    
    // Copy all methods to the function
    Object.assign(ToastFunction, Toast);
    
    // Create Alert function shortcut
    const AlertFunction = function(arg1, arg2, arg3) {
        return Alert.Show(arg1, arg2, arg3);
    };
    
    // Copy all methods to the function
    Object.assign(AlertFunction, Alert);
    
    // --- Init ---
    injectCSS();
    
    // --- Export ---
    // Create a constructor function for new UI2TOOL instances
    function UI2TOOLConstructor(rootClassName) {
        // Support both styles: new UI2TOOL('class-name') and new UI2TOOL({rootClass: 'class-name'})
        let options = {};
        if (typeof rootClassName === 'string') {
            // If it doesn't start with # or ., add # to make it an ID
            if (!rootClassName.startsWith('#') && !rootClassName.startsWith('.')) {
                rootClassName = '#' + rootClassName;
            }
            options = { rootClass: rootClassName };
        } else if (typeof rootClassName === 'object') {
            options = rootClassName;
        }
        
        // Create the instance
        const instance = createUI2TOOLInstance(options);
        
        // Copy all properties to this instance
        this.Tooltip = instance.Tooltip;
        this.Toast = instance.Toast;
        this.Alert = instance.Alert;
        this.configure = instance.configure;
        this.config = instance.config;
        
        // Return this to support both constructor and factory patterns
        return this;
    }
    
    // Add default methods to prototype
    UI2TOOLConstructor.prototype = {
        constructor: UI2TOOLConstructor
    };
    
    // Create the global UI2TOOL object with default implementation
    const defaultImplementation = {
        Tooltip: TooltipFunction,
        Toast: ToastFunction,
        Alert: AlertFunction,
        configure,
        create: createUI2TOOLInstance
    };
    
    // Combine the constructor function with the default implementation
    // This allows both usages:
    // 1. UI2TOOL.Toast.Show() - uses default implementation
    // 2. new UI2TOOL('class-name') - creates a new instance
    Object.assign(UI2TOOLConstructor, defaultImplementation);
    
    // Export to global scope
    global.UI2TOOL = UI2TOOLConstructor;

})(window);
