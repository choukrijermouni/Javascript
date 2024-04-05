// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
 let time = 0; 
 switch (name) {
     case 'Pure Strawberry Joy':
         time = 0.5;
         break;
     case 'Energizer' :
     case 'Green Garden':
         time = 1.5;
         break;
     case 'Tropical Island':
         time = 3;
         break;
     case 'All or Nothing':
         time = 5;
         break;
     default:
         time = 2.5;
         break;
  }
 return time;
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let i = 0;
  let totalWedgesCut = 0;
  let limesNeeded = 0;
  while (i < limes.length && totalWedgesCut < wedgesNeeded){
      switch (limes[i]) {
          case 'small':
              totalWedgesCut +=6;
              break;
          case 'medium':
              totalWedgesCut +=8;
              break;
          case 'large':
              totalWedgesCut +=10;
              break;
          default:
              break;
      }
      i++;
      limesNeeded++;
      
  }
    return limesNeeded;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let tempOrders = orders;
  let i =0;
  let remainingOrdersTime = 0;
  while (i < orders.length && remainingOrdersTime < timeLeft) {
      remainingOrdersTime += timeToMixJuice(orders[i]);
      tempOrders.shift();
  }
    return tempOrders;
}
