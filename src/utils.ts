type Dict = { [key: string]: number }

// Ajax 中的GET, 同理还可以写出POST函数
export function get(url: string, callback: (res: any) => void) {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', url, true, 'e5333844037dbf3528ed', 'a6d51d3b87c0878d1dc8570cc179af833fa6eea6')
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.send()
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            callback(JSON.parse(xhr.responseText))
        }
    }
}

export function getCountOfCommits(team: string, repo: string, callback: (count: Dict) => void) {
    // 获取队伍的commit情况，返回值为一个字典，包含队伍所有成员的名称和他们的提交数量
    // Callback 函数和 Lambda表达式语法, 这里其实可以不用回调, 用Promise, 但是就不增加学习成本了
    get(`https://api.github.com/repos/${team}/${repo}/contributors`, (res) => {

        const team_contri: Dict = {};
        var sum = 0
        for(var i=0; i<res.length;i++)
        {
            team_contri[res[i].login] = res[i].contributions;
            sum = sum + res[i].contributions;
        }
        team_contri['sum'] = sum;
        callback(team_contri)
    })
}

export function getLanguagesDistribution(team: string, repo: string, callback: (languages: Dict) => void){
    // 获取队伍目前项目的代码组成，返回值为一个字典，包含各种语言及其的代码行数，sum对应代码总量。
    get(`https://api.github.com/repos/${team}/${repo}/languages`, (res) => {

        var sum = 0
        var value
        for(value in res)
        {
            sum = sum + res[value];
        }
        res['sum'] = sum;
        callback(res)
    })    
}

export function getTheLastCommitTime(team: string, repo: string, callback: (lastCommitTime: string) => void){
    // 获取特定队伍队伍最后一次提交时间
    get(`https://api.github.com/repos/${team}/${repo}/commits`, (res)=>{
        var time_str = res[0]['commit']['committer']['date'];
        var lastCommitTime = time_str.slice(-9, -1);
        callback(lastCommitTime)
    })
}

