/* -------------------------------------------------------- antd -- */
import { Timeline } from 'antd'
import React from "react";
/* -------------------------------------------------------- Declare -- */
const { $, $fn, $lazy } = window
/* -------------------------------------------------------- Async Component -- */
const Empty = $lazy.load(()=>import('@antd/empty'))
const Loading = $lazy.load(()=>import('@antd/loading'))
/* -------------------------------------------------------- 时间线 -- */
const Index = ({ data=[], hide, height, loading, loadingSize, emptyText='暂无数据', style, className, children }, ref) => {

    const [ result, setResult ] = React.useState(data)
    const [ hidden, setHidden ] = React.useState(hide)
    // React.useEffect(()=>{
    //     setResult( $fn.isArray(data) ? [...data] : [])
    // }, [  ])

    React.useImperativeHandle( ref, () => ({
        data(){
            const { length } = arguments
            if(length === 1){
                const rs = arguments[0]
                setResult( $fn.isArray(rs) ? [...rs] : [])
            }else{
                setResult([])
            }
        },
        hide(value){
            setHidden(Boolean(value))
        }
    }))

    return (
        <div style={{height, ...style}} className={`rel fv ${$.css(className)}`}>
            {
                $fn.hasArray(result) && (
                    <>
                        <Timeline className='ex'>
                            {
                                result.map((v,i)=><Timeline.Item key={i}>{v.children}</Timeline.Item>)
                            }
                        </Timeline>
                        { hidden ? null : children }
                    </>
                )
            }
            <Loading loading={loading} size={loadingSize} style={{zIndex:2}}/>
            <Empty loading={loading} data={result} simple style={{zIndex:1}} msg={ '暂无数据' } />
        </div>
    )
}

export default Index