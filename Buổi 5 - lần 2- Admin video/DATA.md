# CSV Schemas

## `data/users.csv`
```
id,username,email,password,role
1,admin1,admin1@gmail.com,123456,ADMIN
2,user1,user1@gmail.com,123456,USER
```
- **id**: integer primary key
- **username**: unique login name
- **email**: contact email
- **password**: plain‑text for demo (replace with hash in production)
- **role**: `ADMIN` or `USER`

## `data/videos.csv`
```
id,title,thumbnail,views,category_id,storage_mb,uploaded_at
1,Intro to Vibe,thumb1.jpg,1520,1,120,2024-01-15
2,Advanced CSS,thumb2.jpg,980,2,85,2024-02-02
3,JS Basics,thumb3.jpg,2150,1,95,2024-02-20
```
- **category_id** links to `video_categories.csv`
- **storage_mb** size of video file
- **uploaded_at** ISO date (YYYY‑MM‑DD)

## `data/video_categories.csv`
```
id,name
1,Tutorial
2,Demo
3,Interview
```
These files reside in the `data/` folder and are read with `fetch()`.
