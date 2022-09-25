const post = {
    insert:"INSERT INTO post(title,content,url,publish_time,ref) "+
            "VALUES(?,?,?,?,?)"

}

// 导出文章相关的数据
module.exports = post