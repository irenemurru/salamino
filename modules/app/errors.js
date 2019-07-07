/*
 * Copyright (C) 2018 Ryan Mason - All Rights Reserved
 *
 * Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.
 *
 * https://github.com/Rytiggy/Glance/blob/master/LICENSE
 * ------------------------------------------------
 *
 * You are free to modify the code but please leave the copyright in the header.
 *
 * ------------------------------------------------
 */



export default class errors { 
  check(timeSenseLastSGV, sgv, errorLine) {
    // if the bloodsugar is stale 
    console.log(parseInt(timeSenseLastSGV, 10))
    if (parseInt(timeSenseLastSGV, 10) >= 15) {
      errorLine.style.display = "inline";
      // largeGraphErrorLine.style.display = "inline";
      errorLine.style.fill = 'gray';
      // largeGraphErrorLine.style.fill = 'gray'
      sgv.style.fill = 'gray';
      // largeGraphsSgv.style.fill = 'gray'
    } else {
      errorLine.style.display = "none";
      // largeGraphErrorLine.style.display = "none";
    }
  }
};
