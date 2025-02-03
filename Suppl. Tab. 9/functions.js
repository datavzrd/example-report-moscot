function custom_func_928c67c8b2d71c93ed29ce3dd39fc94c(value) { try { 
  const trueLabel = '<span style="display: inline-block; margin: 1px; width: 2em; height: 2em; line-height: 2em; font-size: 1em; font-weight: bold; color: white; background-color: rgb(31, 119, 180); border-radius: 0.4em; text-align: center;">+</span>';
  const falseLabel = '<span style="display: inline-block; margin: 1px; width: 2em; height: 2em; line-height: 2em; font-size: 1em; font-weight: bold; color: white; background-color: rgb(214, 39, 40); border-radius: 0.4em; text-align: center;">-</span>';
  if (value === "WAHR") {
      return trueLabel;
  } else if (value === "FALSCH") {
      return falseLabel;
  } else {
      return value;
  }
 } catch (e) { datavzrd.custom_error(e, 'highly_variable') }}
