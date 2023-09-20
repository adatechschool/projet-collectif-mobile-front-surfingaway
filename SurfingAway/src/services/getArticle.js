const getArticle = async (id) => {
  try {
    const response = await fetch(
      `http://192.168.8.82:3000/articles/${id}`,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    const arrayData = []
    arrayData.push(data.title)
    arrayData.push(data.author)
    arrayData.push(data.date)
    arrayData.push(data.content)

    console.log("articles infos datas fetch successfully");
    //[title, author, date, content]
    return arrayData
  } catch (error) {
    console.error(error + "impossible to fetch articles");
    throw error;
  }
};

export default getArticle;
