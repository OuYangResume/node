<template>
    <div>
        <h3>文件上传：</h3>
        选择一个文件上传: <br />
        <form action="http://localhost:8082/user/upload" method="post" enctype="multipart/form-data">
            <input type="file" name="avatar" />
            <br />
            <input type="submit" value="上传文件" />
        </form>
    </div>
</template>

<script>
export default {
    
}
</script>

