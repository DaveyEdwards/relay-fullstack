import Relay from 'react-relay';
import Footer from './FooterComponent';

export default Relay.createContainer(Footer, {
  initialVariables: {
    userId: 'VXNlcjowMDEwMDAwMDAwMDAwMDAwMDAwMDAwMDE='
  },
  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
        user(id: $userId) {
          username
          website
        }
      }`
  }
});
