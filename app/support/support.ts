///<reference path="../../typings/tsd.d.ts"/>
///<reference path="../services/HttpHelper.ts"/>

"use strict";


    interface IStuff {
        Id: number;
        Name: string;
    }

    interface ISupportService {
        getStuff: () => angular.IHttpPromise<IStuff>;
    }

    angular.module("app").factory("SupportService", function(HttpHelper: IHttpHelper): ISupportService {
        return {
            getStuff: function(): angular.IHttpPromise<IStuff> { return HttpHelper.get("Stuff"); }
        };
    });

    angular.module("app")
        .controller("SupportController", function(SupportService: ISupportService) {
            let vm = this;
            SupportService.getStuff().then(function(response: angular.IHttpPromiseCallbackArg<any>) {
                let data: IStuff = response.data;
            });
        });
