/**
 * Typs of Exports:
 *  - Default
 *     - export default {}: default export can be imported with any name
 *       ex: import myConfig from './app.config.js'
 *  - Named
 *    - export const name = 'value': named export can be imported with the same name
 *    ex: import { name } from './app.config.js'
 * 
 * 
 */

//Default export
const APPCONFIG = {
    title: process.env.MY_APP_NAME || 'First Program',
}
module.exports = APPCONFIG;
// export default APPCONFIG;

//Named export
// const APPCONFIG = {
//     title: 'First Program',
// }
// module.exports = {APPCONFIG: APPCONFIG};
