
var React = require('react');
var IconBase = require('../IconBase');

export default class GoOcticonTrashcan extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 768 1024.032" {...this.props}>
                <g><path d="m640 128.001h-128c0-35-29-64-64-64h-192c-35 0-64 29-64 64h-128c-35 0-64 29-64 64v64c0 35 29 64 64 64v576c0 35 29 64 64 64h448c35 0 64-29 64-64v-576c35 0 64-29 64-64v-64c0-35-29-64-64-64z m-64 768h-448v-576h64v512h64v-512h64v512h64v-512h64v512h64v-512h64v576z m64-640h-576v-64h576v64z"/></g>
            </IconBase>
        );
    }
}