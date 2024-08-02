export const stripHTMLTags = (htmlString: any) => {
    // also replaces <br> tags with new lines
    // return htmlString.replace(/<br>/g, "\n").replace(/<[^>]+>/g, "");
    return (htmlString = htmlString.replace(/\n/g, "<br></br>"));
  };
  
  export const replaceMergeTags = (data: any, htmlString: any) => {
    Object.keys(data)?.forEach((key) => {
      if (htmlString.includes(`{{ ${key} }}`)) {
        let val = data[key];
  
        // check if value is an array
        if (val instanceof Array) {
          const listElements = val.map((item) => {
            return `<li>${item}</li>`;
          });
  
          // create an unordered list in HTML
          val = `<ul>${listElements}</ul>`;
        }
  
        const regexPattern = new RegExp(`\\{\\{\\s*${key}\\s*\\}\\}`, "g");
        htmlString = htmlString.replace(regexPattern, val);
      }
    });
  
    return htmlString;
  };
  