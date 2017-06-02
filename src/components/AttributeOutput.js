import React, {Component} from 'react';
class AttributeOutput extends Component {
    constructor(props) {
        super(props);
        this.state = {attributesList: []}
    }

    componentWillReceiveProps() {
        this.setState({attributesList: this.props.attributesList});
    }

    render() {
        return <div style={{"width": "100%"}}>LIVE JSON Output<br/>
            <code>{JSON.stringify(this.props.attributesList, null, ' ')}</code></div>
    }
}
;export default AttributeOutput;
