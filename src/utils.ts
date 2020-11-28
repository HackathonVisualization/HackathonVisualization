type Dict = { [key: string]: number }

// Ajax 中的GET, 同理还可以写出POST函数
export function get(url: string, callback: (res: any) => void) {
    const xhr = new XMLHttpRequest()
    let my_token = '?&access_token=bd2e1933d7071f2c7d1d3f408c515044644abf99'
    xhr.open('GET', (url + my_token), true)
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.send()
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            callback(JSON.parse(xhr.responseText))
        }
    }
}

export function getCountOfCommits(repo: string, callback: (count: Dict, sum: number) => void) {
    // 获取队伍的commit情况，返回值为一个字典，包含队伍所有成员的名称和他们的提交数量
    // Callback 函数和 Lambda表达式语法, 这里其实可以不用回调, 用Promise, 但是就不增加学习成本了
    get(`https://api.github.com/repos/${repo}/contributors`, (res) => {

        const team_contri: Dict = {};
        let sum = 0
        for(let i=0; i<res.length;i++)
        {
            team_contri[res[i].login] = res[i].contributions;
            sum = sum + res[i].contributions;
        }
        callback(team_contri, sum)
    })
}

export function getLanguagesDistribution(repo: string, callback: (languages: Dict, sum: number) => void){
    // 获取队伍目前项目的代码组成，返回值为一个字典，包含各种语言及其的代码行数，sum对应代码总量。
    get(`https://api.github.com/repos/${repo}/languages`, (res) => {

        let sum = 0
        let value
        for(value in res)
        {
            sum = sum + res[value];
        }
        callback(res, sum)
    })    
}

export function getTheLastCommitTime(repo: string, callback: (lastCommitTime: string) => void){
    // 获取特定队伍队伍最后一次提交时间
    get(`https://api.github.com/repos/${repo}/commits`, (res)=>{
        let date = new Date(Date.parse(res[0]['commit']['committer']['date']));
        let m = date.getMonth() + 1;  
        let m_str = m < 10 ? ('0' + m) : m;  
        let d = date.getDate();  
        let d_str = d < 10 ? ('0' + d) : d; 
        let h = date.getHours();  
        let minute = date.getMinutes();  
        let minute_str = minute < 10 ? ('0' + minute) : minute; 
        let second= date.getSeconds();  
        let second_str = minute < 10 ? ('0' + second) : second;
        callback(m_str + '月' + d_str+'日 '+h+':'+minute_str+':'+ second_str)
    })
}

