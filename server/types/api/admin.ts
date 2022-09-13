import { NextApiRequest, NextApiResponse } from "next";
import { ClientMessageModel } from "../models/ClientMessageModel";


// requests
export interface NextApiRequestWithBody extends NextApiRequest {
    body: {
        id: number
        checked: boolean
    }
}

export interface NextApiRequestWithQuery extends NextApiRequest  {
    query: {
        page: string
        count: string
    }
}


// responses
export type ClientMessagesView = {
    errorMessage: string
    data: ClientMessageModel[]
    totalCount: number
}

export type ClientMessageView = {
    errorMessage: string
    data: {}
}

export type NextApiResponseView = NextApiResponse<ClientMessagesView | ClientMessageView>