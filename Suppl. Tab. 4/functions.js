function custom_func_5e02566f3c5f43d78937a1307329f345(value) { try { 
  const trueLabel = '<span style="display: inline-block; margin: 1px; width: 2em; height: 2em; line-height: 2em; font-size: 1em; font-weight: bold; color: white; background-color: rgb(31, 119, 180); border-radius: 0.4em; text-align: center;">+</span>';
  const falseLabel = '<span style="display: inline-block; margin: 1px; width: 2em; height: 2em; line-height: 2em; font-size: 1em; font-weight: bold; color: white; background-color: rgb(214, 39, 40); border-radius: 0.4em; text-align: center;">-</span>';
  if (value === "Yes") {
      return trueLabel;
  } else if (value === "No") {
      return falseLabel;
  } else {
      return value;
  }
 } catch (e) { datavzrd.custom_error(e, 'Highly-Variable') }}
function custom_func_26eca094555c6cb048a47d76a23917ae(value) { try { 
    const pmidRegex = /PMID:\s*(\d+)/;
    const match = value.match(pmidRegex);

    if (match) {
        const pmidNumber = match[1];
        return `<a href="https://pubmed.ncbi.nlm.nih.gov/${pmidNumber}/" target="_blank">${pmidNumber}</a>`;
    } else {
        return value;  // Return the original value if no valid PMID is found
    }
 } catch (e) { datavzrd.custom_error(e, 'PMID') }}
