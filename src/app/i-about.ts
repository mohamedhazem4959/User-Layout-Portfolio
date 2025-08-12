import { Iskills } from "./iskills";

export interface IAbout {
    bio?:string;
    MyPhilosophy?:string;
    WhatIDo?:string;
    skills?:Iskills[];
}

export interface IAboutResponse{
    About:IAbout
}