import { render } from '@testing-library/react';
import React, { Component } from 'react';
import Header from './include/header.js';
import MainContent from './Contents/Main.js';

class App extends React.Component{

  state = {
    code: "main",
    ability :[
      {
        name: "JAVA",
        img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAArlBMVEX///8AdY/ykREAbYkAaocAco0Ac44Ab4vxigDyjgDxiwAAaIUAa4fxiADyjwCxzdX0+fr//PiWvMf86dZso7Ps9PaQuMTd6+96qrn+9+71rmL4yZr98+j97d3S4ue40NiGrrv506/4w5D2uHjznz30pU33vYL73sPzmSz62bkdfpZlnq+lxc/H3OI0hpxRlKf1sWv50ajzmjD1qVb4yJn1r2T2tXNFjqJJlagAX38bj9FBAAAIPklEQVR4nO2aaVejShCGBRo6LAkE2ZxxAPfIqrNcxv//x243S1iMcUZhIH3q+aAeTHKq0t1Vb1XX2RkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALIBvcxswOVdf57Zgar6tt3ObMDVr5hdxs5vbgqnh15dzmzAx/OpqbhMmRlau5zZhWi7W8tPcNkzLw2rzZW4bpuValhn3cLdhfJeer3n5fm4jJuWLzCtMZ4tva55fM11e3G54np/biCl5XvG8fDO3FRNC9yi/Pp/bjOnY7sge3dzObcaE3Ml0CR/mNmM6nhTi4OZubjOm44ZEGaZTxVPpIMOV0xe6RXmZ2TCzvS0d5DcXc1syERc7uXSQ2VR4Lm8qB1lNFFdljCEODmqK8ytG9uz1unbwuft0+3z7OJdFI/Pj0Ape3K9Z0d8X3+Xawc6KEf82rMScJsbwqzbIbK9Xa2Z6UY/1Edwo7ZJdbRR27ma+1g7K/P6m4vJ2tVGYSRpNEJV3+xvDK2XDK6wcwbOb2kGlrZfuyaMVMw7e11lC+bF/dKewpGuaLbraN7i3tyRxrJgJMleNg21ipw7KP46856T41pzB9oqiLBBlRpQovX6pHGwz+zP1WWamwv9Z1budiv6ifMLMoMm2kTKtQ7+oPGXn4vBaGRa8l6XP7Fw61VKms2L3ZYXBTLI/rzbpqjM2U0UeZgZpvlaNw1/tk2qTsuPhf/KgIjx7qBQcM7v0qfRw3XlyVYUehZXOTLWG3fm8xzo//jebTeNyQz3sXRPWHvLKbDaNS5UOu2t43shURrZpHVc6T7Z1P4qV+9/L0sNV99GvAz3FU6YcKeklv4d6m7IyafKsDPJh7TQ9iWzU+FvlVS3YxBpeYaMGptF087336Et9ElkZTCyjSm8m4aL2kJVRBRpZBkOWz3V3kRVhc6+86lk0wWbFSCvjVh4uYtN/WzHSE97u5F4NfFbrVWYSBgktvDyY8KrrYOXnTBaNzsVOHvTw7zYsye+zckyoP0BTFcJrNnJ+xf26NwRVChvGhhMf17tObtjSlMjaXNTlbUe8bWWW+t57frZVLwmmG/5gvneDxHGS1PhnVn0S2+/aerkPqI/KMEXW6J4VqQhr2HKnt+5TGL4e5lEUJ/7B1biTj0wpuLnGSVh1JjPu09iBl6EXbAVvbrXz9eZo09tEHMdp1vimjYGdZKqA1Tg99qLd3Tua2xGIiygZ07CRMCwNS5wk+Udfdf7+BXAmcZwk2GPZNRo2h8l3z4nxpz9Jp4uIl3cUy/NDTfP+8ts30sEbbOqhFI1n2kjYItmjpYuoMA9H0dfv8RMrExAeHDqRfowwgY2fxPBw7aOIkcrloZ66hx01bDfVHStDCGGRvkWNeoe3/BRtiYnfNiMkiNVmJW4Kgoa5KMstz3FMiuOEVl5kkYSQIFS+ke1IXpcnXXdsXD6ezY3j2LpFvMSNm8RSSRRxiyjWjtXfgiZkXjD4DJ+eaDGfxf4/ww6cOCK2E0e77nSQiNNkgaP44IF16BoK+r83/O8w3DRx4iLiBBXRTVmBNIRUHBVxmARvHNKzs+pL+KfWfg4SV/w0DXRdD9LUd+33IkiiUU2z+CX8OAbd2HjJp7Di46E+J1EKZyOaMgFGEGYf1lyeQB1cYi7ck+YkW3xYcoUkU6DPS9sJsQtEc6H0wUXwECcusnBqiXCdy8339bedOv0XGYUgoWLhLYysUTNYyEL9TWNdKgqIJBC65zUlAi5afJawI6GRMcRehEhy95yE5kKCniRmGOeZpO6FHZb2e9JT0fL9oyQRwlJfoOFG0lTKtP2vhFFkVkc25V7yo92PJeGHtF3Tiu/DENWtRmFdNbk5dhZ+/gYYqZNHAtmLtEbqq+9KdQtRHgZtnNGPN3eWiuEGiUfEN1YJRH4j8kuIstgzgz/sAZwQhmETmHMLAJaOqy+vpzsiRpIhNZzbignxRardsMNs8LRR0/3Ok3SYIww7TSxu6RXEYVw9/F32Pl21lWYIiVGRxx7FIqo7kkrVLSLrxBbYTXL1ZX9x6Kl9nVY3hXvtYKye0Cb2w4hIsq7Buii8q7yROGx2LxVaLnFCPqjpg4IUS4c73uXm5axTqZUSTqNh03v9HyP1MlFA+5JQqq4wSF3B5ebJ1BJGoZUn7c3eGgmcjkcDDCGjEcfU/WMdnGBpreC68YTDkT7P4NRlrW4i1NFypB61G4nCssKPh5vQX4wwOmE4RCmoy5rBSNvUjqxPbi83lMj3tbhpKEeVWh8j58NO+makYvoZ5pjWjUIaoX1qlzCS8j8dw9hj+0kulQ1IImMbtbqovmlQoE7nsBnDOJoSKmzaqMo5tXo7EUHeXo0XC9urdlIIXS/pGAZJ69Fvy0mqa19aX5S9KNdPA910aAeOLBltNlav18S4jaEppy5PsRqpU6CyaOg0tEsFU17dl41E+gtpxPdO41sizqG+xHFjVV2qoKNjpWRl0NszGD3vBYSkKHaC3n52Yw2jZaXEIaTA1R0rz0SVLpjQjtFUf5A1JQsqRrnl6K+KY6LZEEbZqRTH5QiGntBRqNCzLMsLHTNJdHosD78h9UQBC9yiwuh42LolaRifyPXaX2L4icWpZDtrkrcs1X0I9+/ukNzAtDKRJg0BReFSA2gf3yy4LPZIGnzzHobkRT9IQqvg6E0wLr2L374PXyKuHhZYfVEFsZy8DCs8K/5dZFGpeqqkKJCfYmaZwxHhE4HeHYbl3eGLWoEqNKoAqO9e8ifS7hQgSYMO7tHJPTqv8Ha2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIDp+R++aY7u12rwTQAAAABJRU5ErkJggg=="
      },
      {
        name: "Spring",
        img: "https://pbs.twimg.com/profile_images/1235868806079057921/fTL08u_H_400x400.png"
      },
      {
        name: "HTML",
        img: "https://media.vlpt.us/images/cloudlee711/post/82663379-7357-4266-8f04-3ad75f9b1e60/html5.jpg"
      },
      {
        name: "CSS",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDy7gsOb32vKJRJfCC2fg92r61HRG_jm164A&usqp=CAU"
      },
      {
        name: "Javascript",
        img: "data:image/png;base64,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"
      },
      {
        name: "My-SQL",
        img: "https://pic4.zhimg.com/v2-0e2f90184a543e75b5a5361744e9cc46_720w.jpg?source=172ae18b"
      },
      {
        name: "MariaDB",
        img: "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FWYi21%2FbtqBIHKwsPS%2FZxIx0JaAkJxfbmFCHQUTkK%2Fimg.png"
      },
      {
        name: "React",
        img: "https://cdn.auth0.com/blog/react-js/react.png"
      },
      {
        name: "전기공사",
        img: "https://www.keca.or.kr/file/visualImg/2020/12/2/35404fad-5895-4461-8af9-59fce14a09ce.JPG"
      }
    ]
  }

  render(){
    console.log(this.state.code);
    return (
      <div className="App">
          <Header/>
          <MainContent myAbility={this.state.ability}/>
          {this.state.resultContent}
      </div>
    );
  }
}

class TestInputComponent extends React.Component{
  render(){
    return(
      <div>
        <span><input type="submit" /></span>
        <span><input type="button"/></span>
      </div>
    );
  }
}

export default App;
