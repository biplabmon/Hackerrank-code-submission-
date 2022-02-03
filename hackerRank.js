// <- Browser Automation Project using Puppeteer ->

const puppeteer = require ('puppeteer');

const eMail = 'mafevo5812@icesilo.com';
const password = '12345678910';
const loginLink = 'https://www.hackerrank.com/auth/login';
// const hackerRankAns = require('./hackerRankAns');
const hackerRankAns = {
  answer : [
      `#include <cmath>
  #include <cstdio>
  #include <vector>
  #include <iostream>
  #include <algorithm>
  using namespace std;
  
  
  int solveMeFirst(int a, int b) {
    return a+b;
  }
  int main() {
    int num1, num2;
    int sum;
    cin>>num1>>num2;
    sum = solveMeFirst(num1,num2);
    cout<<sum;
    return 0;
  }`]
};
  



(async ()=>{
  try {
    const browser = await puppeteer.launch({
      headless:false,
      args: ['--start-maximized'],
      defaultViewport: null
    });
    const page = await browser.newPage();
    await page.goto(loginLink);
    await page.type('input[id="input-1"]', eMail , {delay:40});
    await page.type('input[id="input-2"]', password , {delay:40});
    await page.click('button[class="ui-btn ui-btn-large ui-btn-primary auth-button ui-btn-styled"]');
    await page.waitForSelector('[data-automation="algorithms"]');
    await page.click('[data-automation="algorithms"]');
    await page.waitForSelector('input[value="warmup"]');
    await page.click('input[value="warmup"]');
    await page.click(".ui-btn.ui-btn-normal.primary-cta.ui-btn-primary.ui-btn-styled");
    await page.waitForTimeout(4000);
    // const allChallenges = await page.$$("ui-btn.ui-btn-normal.primary-cta.ui-btn-primary.ui-btn-styled");
    // console.log('number of all challenges is', allChallenges.length);
    await page.waitForSelector('label[class="label-wrap"]');
    await page.click('label[class="label-wrap"]');
    await page.type('textarea[id="input-1"]', hackerRankAns.answer[0] , {delay:80});
    await page.keyboard.down('Control');
    await page.keyboard.press('a', {delay:80});
    await page.keyboard.press('c', {delay:80});
    await page.keyboard.up('Control');
    await page.click(".view-lines");
    await page.keyboard.down('Control');
    await page.keyboard.press('a', {delay:80});
    await page.keyboard.press('v', {delay:80});
    await page.keyboard.up('Control');
    await page.waitForTimeout(2000);
    await page.click('button[class="ui-btn ui-btn-normal ui-btn-secondary pull-right msR hr-monaco-compile hr-monaco__run-code ui-btn-styled"]');



    await browser.close();
  } catch (error) {
    console.log(error);
  }

})();
