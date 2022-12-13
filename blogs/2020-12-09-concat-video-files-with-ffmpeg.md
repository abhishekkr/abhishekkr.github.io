## Concat Multiple Video Files into a Single Video with FFMPEG

> 2 Minutes Tech

```
FILE_LIST="/tmp/fyl-list.log"

for fyl in `ls -1 *.mp4`; do
  echo "file ${PWD}/$fyl" >> ${FILE_LIST}
done

ffmpeg -safe 0 -f concat -i ${FILE_LIST} -c copy ~/Desktop/one-joined-video.mkv
```

@Youtube: [https://www.youtube.com/watch?v=9rrpQIYNnm8](https://www.youtube.com/watch?v=9rrpQIYNnm8)

<iframe width="560" height="315" src="https://www.youtube.com/embed/9rrpQIYNnm8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---
