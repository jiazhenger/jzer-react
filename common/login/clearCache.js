// 清除缓存
const Index = () => {
	const { $fn } = window
	$fn.msg.success('清除缓存成功')
	$fn.indexDBClear()
	$fn.sessionClear()
}
export default Index