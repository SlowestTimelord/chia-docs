module.exports = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'CAT2 Upgrade Guide',
      items: ['cat2/cat2-intro', 'cat2/cat2-snapshot', 'cat2/cat2-issuance'],
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/quick-start-guide',
        'getting-started/using-the-gui',
        'getting-started/chia-concepts',
      ],
    },
    {
      type: 'category',
      label: 'About',
      items: ['about/cryptocurrency-intro', 'about/chia-intro'],
    },
    {
      type: 'category',
      label: 'Plotting',
      items: [
        'plotting/plotting-basics',
        'plotting/plotting-software',
        'plotting/k-sizes',
        'plotting/ssd-endurance',
        'plotting/moving-plots',
        'plotting/plotting-faq',
      ],
    },
    {
      type: 'category',
      label: 'Farming',
      items: [
        'farming/farming-basics',
        'farming/farming-many-machines',
        'farming/pool-farming',
        'farming/checking-farm-health',
        'farming/reference-farming-hardware',
        'farming/farming-faq',
      ],
    },
    {
      type: 'category',
      label: 'Primitives',
      items: [
        'primitives/standard-transactions',
        'primitives/singletons',
        'primitives/cats',
        'primitives/nfts',
        'primitives/dids',
        'primitives/offers',
      ],
    },
    {
      type: 'category',
      label: 'RPC Reference',
      items: [
        'rpc-reference/rpcs',
        'rpc-reference/full-node',
        'rpc-reference/dids',
        'rpc-reference/nfts',
        'rpc-reference/offers',
      ],
    },
    {
      type: 'category',
      label: 'CLI Reference',
      items: [
        'cli-reference/clis',
        'cli-reference/dids',
        'cli-reference/nfts',
        'cli-reference/offers',
      ],
    },
    {
      type: 'category',
      label: 'Coin Set Model',
      items: [
        'coin-set-model/coin-set-intro',
        'coin-set-model/conditions',
        'coin-set-model/spend-bundles',
        'coin-set-model/addresses',
      ],
    },
    {
      type: 'category',
      label: 'Architecture',
      items: [
        'architecture/architecture-overview',
        'architecture/full-nodes',
        'architecture/farmers',
        'architecture/harvesters',
        'architecture/timelords',
        'architecture/pools',
        'architecture/wallets',
        'architecture/mempool',
      ],
    },
    {
      type: 'category',
      label: 'Consensus',
      items: [
        'consensus/consensus-intro',
        'consensus/proof-of-space',
        'consensus/vdfs',
        'consensus/challenges',
        'consensus/signage-and-infusion-points',
        'consensus/harvester-algorithm',
        'consensus/multiple-blocks',
        'consensus/three-vdf-chains',
        'consensus/overflow-blocks',
        'consensus/foliage',
        'consensus/epoch-and-difficulty',
        'consensus/light-clients',
        'consensus/timelords',
        'consensus/attacks-and-countermeasures',
        'consensus/analysis',
      ],
    },
    {
      type: 'category',
      label: 'Block Validation',
      items: [
        'block-validation/block-validation',
        'block-validation/block-format',
        'block-validation/block-rewards',
      ],
    },
    {
      type: 'category',
      label: 'Keys',
      items: [
        'keys/architecture',
        'keys/keys-and-signatures',
        'keys/plot-ids',
        'keys/plot-public-keys',
      ],
    },
    {
      type: 'category',
      label: 'Protocol',
      items: [
        'protocol/protocol',
        'protocol/networking-protocol',
        'protocol/serialization-protocol',
        'protocol/harvester-protocol',
        'protocol/peer-protocol',
        {
          type: 'category',
          label: 'Pool Protocol',
          items: [
            'protocol/pool/pool-protocol',
            'protocol/pool/pool-protocol-specification',
          ],
        },
        'protocol/wallet-protocol',
      ],
    },
    {
      type: 'category',
      label: 'Reference Client',
      items: [
        'reference-client/chia-installation-guide',
        'reference-client/check-if-things-are-working',
        'reference-client/node-syncing',
        'reference-client/key-management',
        'reference-client/chia-seeder-guide',
        'reference-client/directory-structure',
        'reference-client/freebsd-install',
        'reference-client/openbsd-install',
        'reference-client/logging-reference',
        'reference-client/password-protected-keys',
        'reference-client/raspberry-pi',
        'reference-client/headless-node',
      ],
    },
    {
      type: 'category',
      label: 'Resources',
      items: [
        'resources/references',
        'resources/storage-farming',
        'resources/faq',
      ],
    },
  ],
};
