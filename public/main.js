console.log('我是 main.js');
let n = 1;
getNextPage.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET',`/page${n + 1}`)
    request.onreadystatechange = () => {
        if(request.readyState === 4 && request.status === 200){
            const array = JSON.parse(request.response)
            array.forEach(item => {
                const li = document.createElement('li')
                li.textContent = item.id 
                xxx.appendChild(li)
            });
            n += 1;
    }
}
    request.send()
}

getJSON.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET','/4.json')
    request.onreadystatechange = () => {
        if(request.readyState === 4 && request.status === 200){
            const object = JSON.parse(request.response)
            myName.textContent = object.name
        }
    }
    request.send()
}

getXML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET','/3.xml')
    request.onreadystatechange = () => {
        if(request.readyState === 4 && request.status === 200){
            const dom = request.responseXML
            const text = dom.getElementsByTagName('warning')[0].textContent
            console.log(text.trimEnd())
        }
    }
    request.send()
}

getHTML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET','/2.html')
    request.onload = () => {
        const div = document.createElement('div')
        div.innerHTML = request.response
        document.body.appendChild(div)
    }
    request.onerror = () => {
        console.log('失败了')
    }
    request.send()
}
getJS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET','/1.js')
    request.onload = () => {
        const script = document.createElement('script')
        script.innerHTML = request.response
        document.body.appendChild(script)
    }
    request.onerror = () => {
        console.log('失败了')
    }
    request.send()
}

getCSS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET','/style.css')
    request.onreadystatechange = () => {
        console.log(request.readyState)
        if(request.readyState ===4) {
            // 下载完成，但不知道成功（2XX）还是失败（4XX 5XX）
        if(request.status >=200 && request.status < 300){
    // request.onload = () =>{
        // 创建 style 标签并填写内容，然后插入 head 里
        const style = document.createElement('style')
        style.innerHTML = request.response
        document.head.appendChild(style)
        } else {
            alert('加载 CSS 失败')
        }
    }
    }
    // request.onerror = () =>{console.log('失败了')}
    request.send()
}
