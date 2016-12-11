import Relay from 'react-relay';
import Feature from './FeatureComponent';

export default Relay.createContainer(Feature, {
  initialVariables: {
    first: 20
  },
  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
        id,
        features(first: $first) {
          edges {
            node {
              id
              name
              description
              url
            }
          }
        }
      }`
  }
});
