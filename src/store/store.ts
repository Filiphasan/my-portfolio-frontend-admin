import { combineReducers } from 'redux';

interface AppState {
    user: any
    aboutme: any
    category: any
    article: any
    comment: any
    contact: any
    education: any
    experience: any
    interest: any
    project: any
    skill: any
    tag: any
    tech_stack: any
    upload: any
}

const rootReducer = combineReducers<AppState>(
    {
        user: () => { },
        aboutme: () => { },
        category: () => { },
        article: () => { },
        comment: () => { },
        contact: () => { },
        education: () => { },
        experience: () => { },
        interest: () => { },
        project: () => { },
        skill: () => { },
        tag: () => { },
        tech_stack: () => { },
        upload: () => { }
    }
);