import {expect} from 'chai';
import fs from 'fs';



describe('The test setup test',() => {
  it('should pass', () => {
expect('pass').to.be.equal('pass');
  })
});


describe('The dom testing setup test', () =>{
  it('should say hello', (done) => {
    const jsdom = require('jsdom');
    const index = fs.readFileSync("./src/index.html", "utf-8");
    const { JSDOM }= jsdom
    const dom = new JSDOM(index);
    const h1 = dom.window.document.getElementsByTagName('h1')['0'];
    expect(h1.innerHTML).to.be.equal('Hello World');
    done();
  })
});
