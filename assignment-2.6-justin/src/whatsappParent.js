import React from 'react';
// import WhatsappChild from './whatsappChild';
// import WhatsappChildTwo from './whatsappChildTwo';

class WhatsappParent extends React.Component {
  render() {
    let {title = "title"} = this.props;
    let {linkOne = "linkOne"} = this.props;
    let {linkTwo = "linkTwo"} = this.props;
    let {linkThree = "linkThree"} = this.props;
    let {web = "web"} = this.props;
    return (
    <>
    <div>
        <h2>{title}</h2>
        <a href={web}>{linkOne}</a>
        <p>{linkTwo}</p>
        <p>{linkThree}</p>
    </div>;    
    </>
    )
}
}
export default WhatsappParent;