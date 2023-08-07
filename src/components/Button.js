import "./Button.css";

function Button({content, onClick}) {
  return <button class="button" onClick={onClick}>
    {content}
  </button>

// return <a href="/" class="clip-each clip-gradient">
//     <div class="clip-caption">{content}</div>
// </a>	
}

export default Button;