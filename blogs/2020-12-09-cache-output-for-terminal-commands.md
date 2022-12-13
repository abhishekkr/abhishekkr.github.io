## Cache output for your Bash functions (any console command)

> Let's Code

Here we write a bash function to which when you pass a command like `run-it curl example.com` it executes this and stores the output in a local checksum mapped cache file. So when the same command gets re-run via `run-it`, it will just bring it out via cache copy.

To run it without cache could set env variable `RUN_IT_CACHE_DISABLED=true` and look at fresh output. Could delete the cache file to freshen up the result.

> the final & updated copy of this would remain [her at my dotfiles](https://github.com/abhishekkr/dotfiles/blob/master/shell_profile/a.cli.sh#L685)

```
run-it(){
  local _cmd="$@"
  local _cmd_type=$(echo "${_cmd}" | sed 's/ .*//g')
  local _checksum=$(echo "${_cmd}" | base64)

  [[ -z "${RUN_IT_CACHE_DIR}" ]] && \
    RUN_IT_CACHE_DIR="/tmp/run-it"
  [[ ! -d "${RUN_IT_CACHE_DIR}" ]] && \
    mkdir -p "${RUN_IT_CACHE_DIR}"
  local _cache_file="${RUN_IT_CACHE_DIR}/${_cmd_type}.${_checksum}"

  if [[ $(echo "${RUN_IT_CACHE_DISABLED}!" | tr '[:upper:]' '[:lower:]') == "true!" ]]; then
    eval $_cmd
    return
  fi

  [[ ! -f "${_cache_file}" ]] && \
    eval $_cmd > "${_cache_file}"

  cat "${_cache_file}"
  echo ''
  echo "serving cached results from: ${_cache_file}"
}
```

@Youtube: [https://www.youtube.com/watch?v=IdZ1bcmNx4E](https://www.youtube.com/watch?v=IdZ1bcmNx4E)

<iframe width="560" height="315" src="https://www.youtube.com/embed/IdZ1bcmNx4E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---
