export default function titleChange(){
    return (
        <script dangerouslySetInnerHTML={
            {
                __html: `var title = {origin: document.getElementById("waa").innerHTML, focus: 'o(≧∇≦o) wawa u back!',blur: '(TдT) dont go!!'};window.onfocus = function(){document.getElementById("waa").innerHTML = title.focus;setTimeout(() => document.getElementById("waa").innerHTML = title.origin)};window.onblur = function(){title.origin=document.getElementById("waa").innerHTML;document.getElementById("waa").innerHTML = title.blur};`
            }
        }/>
    )
}