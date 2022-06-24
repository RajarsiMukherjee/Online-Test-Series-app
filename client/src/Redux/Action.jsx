export const EXAMNAME = "EXAMNAME"

export const EXAMLEVEL = "EXAMLEVEL"

export const examNamee = (payload) => (
    {
        type : EXAMNAME,
        payload
    }
) 


export const examLevel = (payload) => (
    {
        type : EXAMLEVEL,
        payload
    }
) 