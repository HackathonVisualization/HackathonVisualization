// Ajax 中的GET, 同理还可以写出POST函数
export function get(url: string, callback: (res: any) => void) {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', url, true)
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.send()
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            callback(JSON.parse(xhr.responseText))
        }
    }
}

export function getCountOfCommits(team: string, repo: string, callback: (count: number) => void) {
    // Callback 函数和 Lambda表达式语法, 这里其实可以不用回调, 用Promise, 但是就不增加学习成本了
    get(`https://api.github.com/repos/${team}/${repo}/contributors`, (res) => {
        callback(res[0].contributions)
    })
}