import { connect } from 'react-redux';
import {
  increment,
  getCounter
} from '../modules/counter';
import {
    addTomyString,
    getletter
} from '../modules/generator';

import Home from '../components/Home';


function generateRandomString (iLen) {
    var sRnd = ''
    var sChrs = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz';
    for (var i=0; i<iLen; i++) {
        var random = Math.floor(Math.random() * sChrs.length);
        sRnd += sChrs.substring(random, random + 1);
    }
    return sRnd
}

const mapDispatchToProps = {
  increment: () => increment(1),
  generateRandomString: () => addTomyString(generateRandomString(1))
};

const mapStateToProps = (state) => {
  return {
    counter: getCounter(state),
    generator: getletter(state)
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Home);