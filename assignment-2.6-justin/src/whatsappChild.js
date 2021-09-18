import React from 'react';

class WhatsappChild extends React.Component {
    BoxOne(props) {
      const {title = "title"} = props;
      return <div>
        <h2>{title}</h2>
        <p>About forwarding limits</p>
        <p>How to update Whatsapp</p>
        <p>How to change group privacy settings</p></div>;
    };
  
    BoxTwo(props) {
      const {title = "title"} = props;
      return <div>
        <h2>{title}</h2>
        <p>Verifying your number</p>
        <p>How to restore your chat history</p>
        <p>How to manage your notifications</p></div>;
    };
  
    BoxThree(props) {
      const {title = "title"} = props;
      return <div>
        <h2>{title}</h2>
        <p>How to restore your chat history</p>
        <p>How to manage your notifications</p>
        <p>How to use status</p></div>;
    };

    render() {
        return (
          <div>
            <this.BoxOne title="General"/>
            <this.BoxTwo title="Android" />
            <this.BoxThree title="iPhone" />    
          </div>
        );
      }
}
export default WhatsappChild;