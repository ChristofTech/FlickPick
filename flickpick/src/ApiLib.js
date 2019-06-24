var ApiLib = {};

ApiLib.common = {
  api_key: "0ce9778e876db645797841a0fc50de6a",
  baseURL: "http://api.themoviedb.org/3/",
  imagesURL: "http://image.tmdb.org/t/p/",
  language: "en-US",

  getGenreList: function() {
    return ApiLib.common.baseURL + "genre/movie/list?api_key=" + ApiLib.common.api_key + "&language=" + ApiLib.common.language;
  },

  getQuery: function(options) {
    var myOptions, query, option;

    myOptions = options || {};

    query = ApiLib.common.baseURL + "discover/movie?api_key=" + ApiLib.common.api_key + "&language=" + ApiLib.common.language + "&sort_by=popularity.desc&include_adult=false&include_video=true&page=1"

    if (Object.keys(myOptions).length > 0) {
      for (option in myOptions) {
        if (myOptions.hasOwnProperty(option) && option !== "id" && option !== "body") {
          query = query + "&" + option + "=" + myOptions[option];
        }
      }
    }
    return query;
  },

  getImage: function(options) {
    return ApiLib.common.imagesURL + options.size + options.file;
  }
};


export default ApiLib;
