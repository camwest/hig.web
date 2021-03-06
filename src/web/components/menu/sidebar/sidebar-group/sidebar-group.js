import './sidebar-group.scss';

var Template = require('./sidebar-group.html');
var Interface = require('../../../../../interface/interface.json');
var Core = require('../../../../shared/js/_core.js');

var Item = require('./sidebar-group-item/sidebar-group-item.js');

/**
 * Creates an SidebarGroup
 *
 * @class
 */

class SidebarGroup extends Core {

    constructor(options){
        super(options);
        this._render(Template, options);
    }

    addItem(itemInstance, referenceItem){
        if(itemInstance instanceof Item){
            this.mountPartialToComment('ITEM', itemInstance, referenceItem);
        }
    }

}

SidebarGroup._interface = Interface['Components']['Menu']['partials']['Sidebar']['partials']['Group'];
SidebarGroup._defaults = {};
SidebarGroup._partials = {
    Item: Item
}

module.exports = SidebarGroup;