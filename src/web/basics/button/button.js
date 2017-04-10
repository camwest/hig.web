import './button.scss';

import Template from './button.html';
import Interface from '../../../interface/interface.json';
import Core from '../../shared/js/_core.js';

/**
 * Creates an button
 *
 * @class
 */

export class Button extends Core {

    constructor(target, options){
        super(options);
        this._render(target, options);
    }

    _render(target, options){
        // RENDER TO DOM
        this.el = super._render(target, options, Template);       
    }

    addHigEventListener(event, fn){
        if(event == 'click'){
            this._attachListener("click", this.el, this.el, fn);
        }else if(event == 'hover'){
            this._attachListener("hover", this.el, this.el, fn);
        }
    }

    setTitle(title){
        this.el.querySelectorAll("a")[0].textContent = title;
    }

    setLink(link){
        this.el.querySelectorAll("a")[0].setAttribute("href", link);
    }

}

Button._interface = Interface['basics']['button'];
Button._defaults = {
    title: "link",
    link: "#"
};