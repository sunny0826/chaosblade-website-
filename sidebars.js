module.exports = {
  "docs": {
    "About ChaosBlade": [
      "about-chaosblade/overall-introduce",
      "about-chaosblade/box-introduce",
      "about-chaosblade/blade-introduce",
    ],
    "Getting Started": [
      "getting-started/platform-box-quick-start",
      "getting-started/quick-start",
      {
        "Chaosblade tool quick start": [
          "getting-started/chaosblade-tool-quick-start/chaosblade-tool-quick-start",
          "getting-started/chaosblade-tool-quick-start/server-mode-user-guaid",
          "getting-started/chaosblade-tool-quick-start/yaml-mode-user-guaid",
          {
            "Cli mode user guaid": [
                "getting-started/chaosblade-tool-quick-start/cli-mode-user-guaid/blade",
                "getting-started/chaosblade-tool-quick-start/cli-mode-user-guaid/blade-check",
                "getting-started/chaosblade-tool-quick-start/cli-mode-user-guaid/blade-prepare",
                "getting-started/chaosblade-tool-quick-start/cli-mode-user-guaid/blade-revoke",
                "getting-started/chaosblade-tool-quick-start/cli-mode-user-guaid/blade-create",
                "getting-started/chaosblade-tool-quick-start/cli-mode-user-guaid/blade-destroy",
                "getting-started/chaosblade-tool-quick-start/cli-mode-user-guaid/blade-query",
                "getting-started/chaosblade-tool-quick-start/cli-mode-user-guaid/blade-status",
                "getting-started/chaosblade-tool-quick-start/cli-mode-user-guaid/blade-version",
            ]
          }
        ]
      },
      {
        "Installation And Deployment": [
          "getting-started/installation-and-deployment/platform-box-install-and-uninstall",
          "getting-started/installation-and-deployment/tool-chaosblade-install-and-uninstall",
          "getting-started/installation-and-deployment/agent-install",
          "getting-started/installation-and-deployment/environment-prepare",
        ]
      }
    ],
    "Community": [
      "community/docs",
      "community/PR-guide",
      "community/dev-standard",
      "community/os-dev-guide",
      "community/issue-standard",
    ],
    "Types of Chaos Experiments": [
      {
        "Physical Host":[
          {
            "CPU": [
              "experiment-types/host/blade create cpu load",
            ]
          },
          {
            "Network":[
              "experiment-types/host/blade create network delay",
              "experiment-types/host/blade create network dns",
              "experiment-types/host/blade create network drop",
              "experiment-types/host/blade create network loss",
              "experiment-types/host/blade create network corrupt",
              "experiment-types/host/blade create network reorder",
              "experiment-types/host/blade create network duplicate",
              "experiment-types/host/blade create network occupy",
            ]
          },
          {
            "Disk": [
              "experiment-types/host/blade create disk burn",
              "experiment-types/host/blade create disk fill",
            ]
          },
          {
            "Process": [
              "experiment-types/host/blade create process kill",
              "experiment-types/host/blade create process stop",
            ]
          },
          {
            "Script": [
              "experiment-types/host/blade create script delay",
              "experiment-types/host/blade create script exit",
            ]
          },
          {
            "Time": [
              "experiment-types/host/blade create time travel",
            ]
          }
        ]
      },
      {
        "Kubernetes": [
          "experiment-types/k8s/blade create k8s",
          {
            "Pod": [
              "experiment-types/k8s/blade create k8s pod-network",
              "experiment-types/k8s/blade create k8s pod-pod",
              "experiment-types/k8s/blade create k8s pod-IO",
              "experiment-types/k8s/blade create k8s pod-fail",
            ]
          },
          {
            "Node": [
              "experiment-types/k8s/blade create k8s node-network",
              "experiment-types/k8s/blade create k8s node-cpu",
              "experiment-types/k8s/blade create k8s node-process",
              "experiment-types/k8s/blade create k8s node-disk",
            ]
          },
          {
            "Container": [
              "experiment-types/k8s/blade create k8s container-network",
              "experiment-types/k8s/blade create k8s container-cpu",
              "experiment-types/k8s/blade create k8s container-process",
              "experiment-types/k8s/blade create k8s container-container",
            ]
          },
        ]
      },
      {
        "Application": [
          {
            "Java": [
              "experiment-types/jvm/blade create jvm",
              "experiment-types/jvm/blade prepare jvm",
              "experiment-types/jvm/blade create jvm delay",
              "experiment-types/jvm/blade create jvm return",
              "experiment-types/jvm/blade create jvm script",
              "experiment-types/jvm/blade create jvm cpufullload",
              "experiment-types/jvm/blade create jvm OutOfMemoryError",
              "experiment-types/jvm/blade create jvm CodeCacheFilling",
              "experiment-types/jvm/blade create jvm throwCustomException",
            ]
          },
        ]
      }
    ]
  }
}
