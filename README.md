s# Angular Js 1.5 calls Web API 2

Web API: http://remote.dataservice.com
Web api token: x-access=ewlkewfnf1f3

Angular js $http call web api Proxy (Home/GetData) in MVC controller: 

$http.get('Home/GetData').success(function (data) {
        $scope.alldata = data;
    }).error(function (err) { console.log(err); });
    
Web api proxy:

        [System.Web.Mvc.HttpGet]
        public async Task<JsonResult> GetData(HttpRequestMessage request)   {
            HttpResponseMessage response;
            ...
            return content;
        }

view: 

       <div class="col-sm-5" style="margin-top:10px; background-color: aliceblue;">
       
            <p ng-hide="alldata">please wait...</p>
            
            <div ng-show="alldata">
           
                     <div ng-repeat="itm in alldata" style="display:inline-block; width:auto;">
                     
                    <img src="{{itm.Poster}}" style="width:150px;height:100px;float:left;cursor:pointer;" ng-click="showdetail(itm.ID)" />
                    {{itm.Title}}
                  
                </div>

            </div>
            
        </div>
        
        
Web api proxy returns Task, so we need a mechanism in angular js to notify when data is returning.

